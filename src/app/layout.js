import { getCookie } from "@/utilities/cookieUtility";
import "./globals.scss";
import DefaultLanding from "@/backgrounds/default/defaultLanding";


export default function Layout({ headerTabs, children }) {
  return (
    <html lang="en">
      {renderBackground(children)}
    </html>
  );
}

function renderBackground(children) {
  let selectedBackground = getCookie("nyoon_background");

  if (selectedBackground === null) return (<DefaultLanding/>);

  switch (selectedBackground) {
    case "lake":
      return(
        
      );
  }
}