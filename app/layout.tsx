import type { Metadata, Viewport } from "next";
import LenisProvider from "@/components/layout/LenisProvider";
import Header from "@/components/layout/Header";
import CustomScrollbar from "@/components/layout/CustomScrollbar";
import CustomCursor from "@/components/layout/CustomCursor";
import BodyReveal from "@/components/layout/BodyReveal";
import ViewportScript from "@/components/layout/ViewportScript";
import ViewportUnitsUpdater from "@/components/layout/ViewportUnitsUpdater";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "AysDigital | Meta Ads, Google Ads, SEO və Rəqəmsal Marketinq",
  description:
    "Ayshen Şəhriliyə məxsus AysDigital — Meta Ads, Google Ads, SEO və rəqəmsal marketinq xidmətləri.",
};

const fontPreloads = [
  "FoundersGrotesk_Bold-s.p.04542d9f.woff2",
  "FoundersGrotesk_BoldItalic-s.p.5259acbc.woff2",
  "FoundersGrotesk_Regular-s.p.d171bb32.woff2",
  "FoundersGrotesk_RegularItalic-s.p.94b2d89a.woff2",
  "MartinaPlantijn_Italic-s.p.0823f51b.woff2",
  "MartinaPlantijn_Regular-s.p.b8a9860b.woff2",
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" dir="ltr">
      <head>
        <ViewportScript />
        {fontPreloads.map((font) => (
          <link
            key={font}
            rel="preload"
            href={`/fonts/${font}`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </head>
      <body>
        <ViewportUnitsUpdater />
        <LenisProvider>
          <BodyReveal>
            <Header />
            <CustomScrollbar />
            <CustomCursor />
            {children}
          </BodyReveal>
        </LenisProvider>
      </body>
    </html>
  );
}
