/* eslint-disable react/no-unescaped-entities */

import { type Metadata } from "next";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "I have spoken at events all around the world and been interviewed for many podcasts.",
};

export default function Speaking() {
  return (
    <SimpleLayout
      title="Veille technologique"
      intro="Quant à la veille technologique, je parviens à créer une routine quotidienne, mais non volontaire, grâce à l outil Dailydev me permettant de découvrir de nouvelles choses. Mais rien ne sera jamais plus efficace que la curiosité naturel, en regardant des vidéos youtube & divers contenu sur le sujet. Outils utilisés : Daily Dev, Documentations, Newsletter, Youtube"
    ></SimpleLayout>
  );
}
