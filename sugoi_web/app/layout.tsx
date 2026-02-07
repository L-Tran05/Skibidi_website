import "./globals.css";
import Foot from "./components/Footer"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
        <Foot />
      </body>
    </html>
  );
}
