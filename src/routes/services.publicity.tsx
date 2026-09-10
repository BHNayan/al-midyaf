import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services/publicity")({
  head: () => ({
    meta: [
      { title: "Publicity & Promotion | Al-Midyaf Al-Shamil" },
      {
        name: "description",
        content:
          "Promotional solutions that help businesses present their products, services and messages to their target audiences.",
      },
      { property: "og:title", content: "Publicity & Promotion | Al-Midyaf Al-Shamil" },
      {
        property: "og:description",
        content: "Promotional visuals, campaign concepts and brand communication.",
      },
      { property: "og:url", content: "/services/publicity" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/publicity" }],
  }),
  component: () => <ServiceDetail slug="publicity" />,
});
