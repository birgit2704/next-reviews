import Navbar from "./components/Navbar";
import "./globals.css";
import { orbitron, exo2 } from "./font.js";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2 mx-auto max-w-5xl">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-sm text-center text-slate-500">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io"
            className="text-orange-800 hover:underline"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
