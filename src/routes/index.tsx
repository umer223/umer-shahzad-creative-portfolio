import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";

const title = "Umer Shahzad — Graphic & Brand Identity Designer | creative.by.umer06";
const description =
  "Umer Shahzad is a graphic designer, brand identity designer, social media designer and web developer working with local and international clients.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Work />
      <Process />
      <Contact />
    </>
  );
}
