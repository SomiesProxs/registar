export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="es">
        <body className="bg-gray-100">{children}</body>
      </html>
    );
  }
  