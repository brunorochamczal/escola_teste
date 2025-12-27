import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Rotas para contatos
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        email: z.string().email("Email inválido"),
        phone: z.string().optional(),
        message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
      }))
      .mutation(async ({ input }) => {
        const { createContact } = await import("./db");
        const { notifyOwner } = await import("./_core/notification");
        
        // Salvar no banco
        await createContact(input);
        
        // Notificar o dono do projeto
        await notifyOwner({
          title: "Novo contato recebido - Escola Excelência",
          content: `Nome: ${input.name}\nEmail: ${input.email}\nTelefone: ${input.phone || "Não informado"}\nMensagem: ${input.message}`,
        });
        
        return { success: true };
      }),
    list: protectedProcedure.query(async () => {
      const { getAllContacts } = await import("./db");
      return await getAllContacts();
    }),
  }),

  // Rotas para eventos
  events: router({
    list: publicProcedure.query(async () => {
      const { getAllEvents } = await import("./db");
      return await getAllEvents();
    }),
    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        eventDate: z.date(),
        imageUrl: z.string().optional(),
        category: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { createEvent } = await import("./db");
        await createEvent(input);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
