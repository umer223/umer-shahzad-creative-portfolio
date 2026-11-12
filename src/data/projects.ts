import crazyBiteBoard from "@/assets/work/crazy-bite-brand-identity-board.png.asset.json";
import crazyBiteHighlights from "@/assets/work/crazy-bite-story-highlights.png.asset.json";
import crazyBiteLogo from "@/assets/work/crazy-bite-primary-logo.png.asset.json";
import crazyBiteProfile from "@/assets/work/crazy-bite-social-profile.png.asset.json";
import crazyBiteCover from "@/assets/work/crazy-bite-cover.jpg";
import crazyBiteWebsite from "@/assets/work/crazy-bite-website.jpg";
import gelaniBoard from "@/assets/work/gelani-mart-brand-identity-board.png.asset.json";
import gelaniCover from "@/assets/work/gelani-mart-cover.jpg";
import gelaniSignage from "@/assets/work/gelani-mart-signage.jpg";
import gelaniStationery from "@/assets/work/gelani-mart-stationery.jpg";
import rehmanCover from "@/assets/work/rehman-hotel-cover.jpg";
import rehmanSocial from "@/assets/work/rehman-hotel-social.jpg";
import rehmanWebsite from "@/assets/work/rehman-hotel-website.jpg";
import rmsCover from "@/assets/work/rms-beauty-cover.jpg";
import rmsSocial from "@/assets/work/rms-beauty-social.jpg";
import rmsPackaging from "@/assets/work/rms-beauty-packaging.jpg";

/** `real` marks an actual client deliverable, as opposed to an illustrative mockup. */
export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  real?: boolean;
  /** A tall image (e.g. a brand board): shown whole on a surface instead of cropped. */
  portrait?: boolean;
};

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
  /** A tall cover (e.g. a full brand board): cards crop from the top, the case study shows it whole. */
  coverPortrait?: boolean;
  gallery: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "crazy-bite",
    index: "01",
    name: "Crazy Bite",
    category: "Fast Food Restaurant",
    services: ["Brand Identity Design", "Social Media Design", "Web Development"],
    summary:
      "A bold, appetite-driven identity for a fast food brand — primary logo, full brand board and Instagram story highlights, built to feel loud, warm and instantly recognizable across packaging, social and the web.",
    showcase: [
      "Primary logo presentation",
      "Brand identity board: colors, typography, mockups",
      "Instagram story highlight icons",
      "Social media post designs",
      "Website screenshots",
    ],
    cover: crazyBiteLogo.url,
    gallery: [
      {
        src: crazyBiteLogo.url,
        alt: "Crazy Bite primary logo: bubble lettering wearing a chef hat with red and yellow swooshes on black, tagline Every Bite Is Craving",
        caption: "Primary logo",
        real: true,
      },
      {
        src: crazyBiteBoard.url,
        alt: "Crazy Bite brand identity board with logo system, color palette, typography, brand personality and mockups",
        caption: "Brand identity board",
        real: true,
        portrait: true,
      },
      {
        src: crazyBiteHighlights.url,
        alt: "Instagram story highlight icon set: Our Story, Menu, Reviews, Branches, Offers, Events, Contact, Delivery and Behind the Fire",
        caption: "Story highlights",
        real: true,
      },
      {
        src: crazyBiteProfile.url,
        alt: "Instagram profile mockup on a phone at a restaurant table surrounded by branded cups and boxes",
        caption: "Social media posts",
        real: true,
      },
      { src: crazyBiteCover, alt: "Takeaway packaging mockup", caption: "Packaging & branding" },
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
      "A clean, trustworthy retail identity system — logo, colors and typography designed to work everywhere from storefront signage to shopping bags and receipts.",
    showcase: [
      "Logo presentation",
      "Brand colors and typography",
      "Visual identity applications",
      "Realistic brand mockups",
    ],
    cover: gelaniBoard.url,
    coverPortrait: true,
    gallery: [
      {
        src: gelaniBoard.url,
        alt: "Gelani Mart brand identity board with logo system, color palette, typography, brand personality and pattern elements",
        caption: "Brand identity board",
        real: true,
      },
      { src: gelaniCover, alt: "Retail bags and cards mockup", caption: "Identity applications" },
      { src: gelaniSignage, alt: "Storefront signage mockup", caption: "Storefront signage" },
      {
        src: gelaniStationery,
        alt: "Stationery and color swatches",
        caption: "Colors & stationery",
      },
    ],
  },
  {
    slug: "rehman-hotel",
    index: "03",
    name: "Rehman Hotel",
    category: "Hospitality",
    services: ["Social Media Management", "Web Development"],
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
      {
        src: rehmanSocial,
        alt: "Hotel social media posts on phones",
        caption: "Social media creatives",
      },
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

export const hasRealWork = (p: Project) => p.gallery.some((g) => g.real);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
