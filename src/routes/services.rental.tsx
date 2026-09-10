import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services/rental")({
  head: () => ({
    meta: [
      { title: "Rental Services | Al-Midyaf Al-Shamil" },
      {
        name: "description",
        content:
          "Rental solutions provided according to client requirements and available business offerings.",
      },
      { property: "og:title", content: "Rental Services | Al-Midyaf Al-Shamil" },
      {
        property: "og:description",
        content: "Rental arrangements organised around each client's requirement.",
      },
      { property: "og:url", content: "/services/rental" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/rental" }],
  }),
  component: () => <ServiceDetail slug="rental" />,
});
