import "./globals.css";

export const metadata = {
  title: "Sarav Motors Auto Repair Center",
  description:
    "Premium automotive servicing, repairs, inspections, and roadside support in Braeside, Victoria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
