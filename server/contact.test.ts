import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

describe("contact.submit", () => {
  it("should successfully submit a contact form", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const contactData = {
      name: "João Silva",
      email: "joao@example.com",
      phone: "(11) 98765-4321",
      message: "Gostaria de agendar uma visita para conhecer a escola.",
    };

    const result = await caller.contact.submit(contactData);

    expect(result).toEqual({ success: true });
  });

  it("should reject contact form with invalid email", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const contactData = {
      name: "João Silva",
      email: "email-invalido",
      phone: "(11) 98765-4321",
      message: "Gostaria de agendar uma visita.",
    };

    await expect(caller.contact.submit(contactData)).rejects.toThrow();
  });

  it("should reject contact form with short message", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const contactData = {
      name: "João Silva",
      email: "joao@example.com",
      phone: "(11) 98765-4321",
      message: "Oi",
    };

    await expect(caller.contact.submit(contactData)).rejects.toThrow();
  });

  it("should accept contact form without phone (optional field)", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const contactData = {
      name: "Maria Santos",
      email: "maria@example.com",
      message: "Gostaria de mais informações sobre a metodologia de ensino.",
    };

    const result = await caller.contact.submit(contactData);

    expect(result).toEqual({ success: true });
  });
});

describe("events.list", () => {
  it("should return list of events", async () => {
    const ctx: TrpcContext = {
      user: null,
      req: {
        protocol: "https",
        headers: {},
      } as TrpcContext["req"],
      res: {} as TrpcContext["res"],
    };

    const caller = appRouter.createCaller(ctx);

    const events = await caller.events.list();

    expect(Array.isArray(events)).toBe(true);
  });
});
