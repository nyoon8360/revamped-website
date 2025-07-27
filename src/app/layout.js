'use client';

import "./globals.scss";
import DefaultLanding from "@/backgrounds/default/defaultLanding";
import BackgroundLake from "@/backgrounds/lake/backgroundLake";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }) {
  const headerTabs = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Interests",
      href: "/interests",
    },
    {
      label: "Music Likes",
      href: "/music-likes",
    },
    {
      label: "Socials",
      href: "/socials",
    },
  ];

  const backgroundParam = useSearchParams().get('background');

  return (
    <html lang="en">
      <body>
        {renderBackground(children, headerTabs, backgroundParam)}
      </body>
    </html>
  );
}

function renderBackground(children, headerTabs, backgroundParam) {
  console.log(`rerendering using value ${backgroundParam}`);

  if (backgroundParam === null || backgroundParam === "none")
    return <DefaultLanding />;

  switch (backgroundParam) {
    case "lake":
      return (
        <BackgroundLake headerTabs={headerTabs}>{children}</BackgroundLake>
      );

    default:
      return <DefaultLanding />;
  }
}
