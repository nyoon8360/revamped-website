import { getCookie } from "@/utilities/cookieUtility";
import "./globals.scss";
import DefaultLanding from "@/backgrounds/default/defaultLanding";
import BackgroundLake from "@/backgrounds/lake/backgroundLake";


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

  return (
    <html lang="en">
      {renderBackground(children, headerTabs)}
    </html>
  );
}

function renderBackground(children, headerTabs) {
  let selectedBackground = getCookie("nyoon_background");

  if (selectedBackground === null) return <DefaultLanding/>;

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