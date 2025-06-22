import "./globals.scss";

export default function Layout({ headerTabs, children }) {
  return (
    <html lang="en">

      <body>
        {children}
      </body>
    </html>
  );
}
