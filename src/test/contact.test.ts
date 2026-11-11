import { describe, expect, it } from "vitest";
import { buildWhatsAppLink, contactSchema, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contact";

describe("contact details", () => {
  it("uses Umer's real WhatsApp number", () => {
    expect(WHATSAPP_URL).toBe("https://wa.me/923169249318");
  });

  it("uses the creative.by.umer06 Instagram profile", () => {
    expect(INSTAGRAM_URL).toBe("https://www.instagram.com/creative.by.umer06/");
  });

  it("sends a valid enquiry to WhatsApp with the details pre-filled", () => {
    const data = contactSchema.parse({
      name: "Sara",
      email: "sara@example.com",
      projectType: "Website Design",
      message: "I need a new website for my cafe.",
    });
    const link = buildWhatsAppLink(data);
    expect(link.startsWith("https://wa.me/923169249318?text=")).toBe(true);
    const text = decodeURIComponent(link.split("?text=")[1]);
    expect(text).toContain("Name: Sara");
    expect(text).toContain("Project type: Website Design");
  });

  it("rejects an invalid email", () => {
    const r = contactSchema.safeParse({
      name: "Sara",
      email: "not-an-email",
      projectType: "Website Design",
      message: "I need a new website for my cafe.",
    });
    expect(r.success).toBe(false);
  });
});
