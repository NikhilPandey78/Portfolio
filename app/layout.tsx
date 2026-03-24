import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "../src/index.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nikhil Pandey | DevOps Engineer",

  description:
    "DevOps Engineer specializing in AWS, Docker, Kubernetes, CI/CD, and cloud infrastructure. Building scalable, secure, and automated systems.",

  keywords: [
    "DevOps Engineer",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",
    "Nikhil Pandey",
    "Cloud Engineer",
  ],

  authors: [{ name: "Nikhil Pandey" }],

  creator: "Nikhil Pandey",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Nikhil Pandey | DevOps Engineer",
    description:
      "Portfolio showcasing DevOps projects, cloud infrastructure, and automation.",
    url: "https://yourdomain.com",
    siteName: "Nikhil Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nikhil Pandey | DevOps Engineer",
    description:
      "DevOps portfolio with cloud, automation, and scalable infrastructure projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nikhil Pandey",
              jobTitle: "DevOps Engineer",
              url: "https://cloudwithnikhil.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/nikhil-kumar-pandey-3a5b8637a",
                "https://github.com/NikhilPandey78",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
