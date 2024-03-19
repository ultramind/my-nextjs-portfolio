import "./globals.css";

export const metadata = {
  title: "Akachukwu",
  description: "Akachukwu personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
