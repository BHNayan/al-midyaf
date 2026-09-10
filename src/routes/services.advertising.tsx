import { createFileRoute } from "@tanstack/react-router";

import { ServiceDetail } from "@/components/ServiceDetail";

export const Route = createFileRoute("/services/advertising")({
  head: () => ({
    meta: [
      { title: "Advertising Services | Al-Midyaf Al-Shamil" },
      {
        name: "description",
        content:
          "Professional advertising solutions designed to communicate your message clearly and create stronger visibility for your brand.",
      },
      { property: "og:title", content: "Advertising Services | Al-Midyaf Al-Shamil" },
      {
        property: "og:description",
        content: "Billboards, outdoor advertising, digital screens and brand displays.",
      },
      { property: "og:url", content: "/services/advertising" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services/advertising" }],
  }),
  component: () => <ServiceDetail slug="advertising" />,
});
