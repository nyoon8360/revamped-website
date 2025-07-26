"use client";

import { useBackgroundContext } from "@/context/background";
import DefaultLanding from "@/backgrounds/default/defaultLanding";
import BackgroundLake from "@/backgrounds/lake/backgroundLake";

export default function BackgroundRenderer({ children }) {
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
  const [background, setBackground] = useBackgroundContext();

  console.log(`bg value: ${background}`);

  return <div>{renderBackground(background, children, headerTabs)}</div>;
}

function renderBackground(selectedBackground, children, headerTabs) {
  console.log(`rerendering using value ${selectedBackground}`);
  if (selectedBackground === null || selectedBackground === "none")
    return <DefaultLanding />;

  switch (selectedBackground) {
    case "lake":
      return (
        <BackgroundLake headerTabs={headerTabs}>{children}</BackgroundLake>
      );

    default:
      return <DefaultLanding />;
  }
}
