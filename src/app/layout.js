'use client';

import "./globals.scss";
import DefaultLanding from "@/backgrounds/default/defaultLanding";
import BackgroundLake from "@/backgrounds/lake/backgroundLake";
import { useBackgroundStore } from '@/stores/background-store';

export default function Layout({ children }) {
  const headerTabs = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Projects",
      href: "/projects"
    },
    {
      label: "Interests",
      href: "/interests"
    },
    {
      label: "Music Likes",
      href: "/music-likes"
    },
    {
      label: "Socials",
      href: "/socials"
    }
  ];

  const { background } = useBackgroundStore();

  return (
    <html lang="en">
      {renderBackground(background, children, headerTabs)}
    </html>
  );
}

function renderBackground(selectedBackground, children, headerTabs) {

  if (selectedBackground === null || selectedBackground === "none") return <DefaultLanding/>;

  switch (selectedBackground) {
    case "lake":
      return(
        <BackgroundLake headerTabs={headerTabs}>
          {children}
        </BackgroundLake>
      );

    default:
      return <DefaultLanding/>;
  }
}