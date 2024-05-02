import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 
      <html lang="en">
        <body>
          <Navbar/>
          {children}
          </body>
      </html>

  );
}