import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const gellixRegular = localFont({
  src: "./fonts/Gellix-Regular.ttf",
  display: "swap",
});
export const metadata = {
  title: "Botify",
  description:
    "Create a personalized GPT model and utilize its capabilities to manage customer support, generate leads, interact with users, and more.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={gellixRegular.className}
          suppressHydrationWarning={true}
          suppressContentEditableWarning
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
