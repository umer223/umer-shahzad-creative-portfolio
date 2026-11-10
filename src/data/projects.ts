import crazyBiteCover from "@/assets/work/crazy-bite-cover.jpg";
import crazyBiteSocial from "@/assets/work/crazy-bite-social.jpg";
import crazyBiteWebsite from "@/assets/work/crazy-bite-website.jpg";
import gelaniCover from "@/assets/work/gelani-mart-cover.jpg";
import gelaniSignage from "@/assets/work/gelani-mart-signage.jpg";
import gelaniStationery from "@/assets/work/gelani-mart-stationery.jpg";
import rehmanCover from "@/assets/work/rehman-hotel-cover.jpg";
import rehmanSocial from "@/assets/work/rehman-hotel-social.jpg";
import rehmanWebsite from "@/assets/work/rehman-hotel-website.jpg";
import rmsCover from "@/assets/work/rms-beauty-cover.jpg";
import rmsSocial from "@/assets/work/rms-beauty-social.jpg";
import rmsPackaging from "@/assets/work/rms-beauty-packaging.jpg";

export type GalleryImage = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  clientType?: string;
  services: string[];
  summary: string;
  showcase: string[];
  cover: string;
  gallery: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "crazy-bite",
    index: "01",
    name: "Crazy Bite",
    category: "Fast Food Restaurant",
    services: ["Brand Identity Design", "Website Development"],
    summary:
      "A bold, appetite-driven identity and website for a fast food restaurant — built to feel loud, warm and instantly recognisable across packaging, social and the web.",
    showcase: [
      "Logo and visual identity",
      "Restaurant branding",
      "Social media designs",
      "Website screenshots",
      "Branding mockups",
    ],
    cover: crazyBiteCover,
    gallery: [
      { src: crazyBiteCover, alt: "Takeaway packaging mockup", caption: "Packaging & branding" },
      { src: crazyBiteSocial, alt: "Social media grid on a phone", caption: "Social media designs" },
      { src: crazyBiteWebsite, alt: "Restaurant website on a laptop", caption: "Website" },
    ],
  },
  {
    slug: "gelani-mart",
    index: "02",
    name: "Gelani Mart",
    category: "Retail / Mart",
    services: ["Brand Identity Design"],
    summary:
      "A clean, trustworthy retail identity system — logo, colours and typography designed to work everywhere from storefront signage to shopping bags and receipts.",
    showcase: [
      "Logo presentation",
      "Brand colours and typography",
      "Visual identity applications",
      "Realistic brand mockups",
    ],
    cover: gelaniCover,
    gallery: [
      { src: gelaniCover, alt: "Retail bags and cards mockup", caption: "Identity applications" },
      { src: gelaniSignage, alt: "Storefront signage mockup", caption: "Storefront signage" },
      { src: gelaniStationery, alt: "Stationery and colour swatches", caption: "Colours & stationery" },
    ],
  },
  {
    slug: "rehman-hotel",
    index: "03",
    name: "Rehman Hotel",
    category: "Hospitality",
    services: ["Social Media Management", "Website Development"],
    summary:
      "A refined digital presence for a hotel — consistent social media creatives paired with a website that presents rooms and hospitality with warmth and clarity.",
    showcase: [
      "Social media creative designs",
      "Digital presence",
      "Website screenshots",
      "Marketing visuals",
    ],
    cover: rehmanCover,
    gallery: [
      { src: rehmanCover, alt: "Hotel website on laptop and phone", caption: "Digital presence" },
      { src: rehmanSocial, alt: "Hotel social media posts on phones", caption: "Social media creatives" },
      { src: rehmanWebsite, alt: "Hotel website on a monitor", caption: "Website" },
    ],
  },
  {
    slug: "rms-beauty-cream",
    index: "04",
    name: "RMS Beauty Cream",
    category: "Beauty & Skincare",
    clientType: "International Client",
    services: ["Brand Identity Design", "Social Media Design"],
    summary:
      "Soft, premium beauty branding for an international skincare client — product-focused creatives and campaign visuals that feel elegant, calm and trustworthy.",
    showcase: [
      "Beauty product branding",
      "Social media campaigns",
      "Product-focused creatives",
      "Premium branding mockups",
    ],
    cover: rmsCover,
    gallery: [
      { src: rmsCover, alt: "Cream jar product mockup", caption: "Product branding" },
      { src: rmsSocial, alt: "Beauty social post on a phone", caption: "Social media campaign" },
      { src: rmsPackaging, alt: "Skincare packaging family", caption: "Packaging mockups" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
