import { z } from "zod";

export const WHATSAPP_DISPLAY = "03169249318";
export const WHATSAPP_URL = "https://wa.me/923169249318";
export const INSTAGRAM_HANDLE = "@creative.by.umer06";
export const INSTAGRAM_URL = "https://www.instagram.com/creative.by.umer06/";

export const projectTypes = [
  "Graphic Design",
  "Logo & Brand Identity",
  "Social Media Post Design",
  "Social Media Management",
  "Website Design",
  "Web Development",
  "Video Editing",
  "Something else",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: "Choose a project type" }) }),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (10+ characters)")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a WhatsApp deep link with the inquiry pre-filled. */
export function buildWhatsAppLink(data: ContactInput) {
  const text = [
    `Hi Umer, I'd like to discuss a project.`,
    ``,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    ``,
    data.message,
  ].join("\n");
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
