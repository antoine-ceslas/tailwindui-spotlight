/* eslint-disable react/no-unescaped-entities */

import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import portraitImage from "@/images/photo_cv.jpg";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";


function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Je suis Antoine Moulin, développeur web et mobile. Je suis passionné par le développement web et mobile, et j aime partager mes connaissances.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Mon parcours
          </h1>
               <div className="space-y-20 mt-4">
                 <ToolsSection title="Baccaulauréat Général">
                   <Tool title="Scientifique">
                    Science de l'ingénieur, Physique-chimie & Mathématiques
                   </Tool>
  

                 </ToolsSection>
                 <ToolsSection title="BUT1 Métiers du Multimédia et de l'Internet">
                   <Tool title="Création Numérique (suite Adobe)">
                     Large évantails de compétences, allant du montage vidéo, à la retouche photo en pssant par la création d'illustration visuelle dans le but de créer des identités visuelles aboutit
                   </Tool>

                   <Tool title="Développement web">
                     Compétences basiques : HTML - CSS 
                   </Tool>
                 </ToolsSection>
                 <ToolsSection title="BUT2 Métiers du Multimédia et de l'Internet">
                     <Tool title="Javascript">
                     Apprentissage et utilisation de JavaScript pour ajouter de l'interactivité aux pages web. Compréhension des concepts clés tels que les variables, les fonctions et les événements.
                     </Tool>
                     <Tool title="Angular">
                     Apprentissage et utilisation d'Angular pour développer des applications web robustes et évolutives. Compréhension des concepts clés tels que les composants, les services et les modules.
                     </Tool>
                     <Tool title="React">
                     Apprentissage et utilisation de React pour créer des interfaces utilisateur dynamiques et réactives. Compréhension des concepts clés tels que les composants, les états et les props.
                     </Tool>
                   <Tool title="UX-UI Design">
                     Apprentissage de différents logiciels d'UX-UI Design, tels que Figma, Adobe XD, Sketch, InVision, etc.
                   </Tool>
                 </ToolsSection>
                 <ToolsSection title="BUT3 Métiers du Multimédia et de l'Internet">
                   <Tool title="Next JS">
                     It is not the newest kid on the block but it is still the fastest. The
                     Sublime Text of the application launcher world.
                   </Tool>
                   <Tool title="React Native">
                     Using a daily notes system instead of trying to keep things
                     organized by topics has been super powerful for me. And with
                     Reflect, it is still easy for me to keep all of that stuff
                     discoverable by topic even though all of my writing happens in the
                     daily note.
                   </Tool>
                   <Tool title="Quadrilingue en puissance">
                     Je collection les langues comme les timbres, Anglais, Tchèque, Slovaque et même Français ! Je ne comptabilise même pas l'espagnol pas peur de vous effrayer, le Chinois arrive bientôt.
                   </Tool>
                   
                 </ToolsSection>
               </div>
         </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              antoine.moulin04@laposte.net
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
