import { describe, expect, it } from "vitest";
import { siteConfig, whatsappLink } from "./site";

describe("Hogar360 contact configuration", () => {
  it("uses the updated professional WhatsApp number", () => {
    expect(siteConfig.telephone).toBe("+1 (809) 642-6108");
    expect(siteConfig.whatsappNumber).toBe("18096426108");
  });

  it("builds an encoded WhatsApp quote link for the updated destination", () => {
    const link = whatsappLink("Hola, quiero cotizar una experiencia Hogar360.");

    expect(link).toMatch(/^https:\/\/wa\.me\/18096426108\?text=/);
    expect(link).toContain(encodeURIComponent("Hola, quiero cotizar una experiencia Hogar360."));
  });
});
