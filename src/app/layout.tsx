import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AutoExpress - Elimina tus Fotomultas con un 90% de Ahorro",
  description: "AutoExpress ofrece asesoría jurídica especializada para impugnar y eliminar fotomultas. Ahorra hasta un 90% y mejora tu historial de conducción fácilmente.",
  keywords: [
    "fotomultas", 
    "eliminar fotomultas", 
    "impugnación de fotomultas", 
    "asesoría jurídica", 
    "abogado de tránsito", 
    "AutoExpress", 
    "trámites de multas", 
    "fotomultas Colombia",
    "ahorrar en multas"
  ],
  openGraph: {
    title: "AutoExpress - Asesoría en Fotomultas",
    description: "Asesoría jurídica especializada para eliminar fotomultas con un ahorro de hasta el 90%. Consulta fácil y rápida.",
    url: "https://autoexpress.com", // Reemplaza con el dominio real
    type: "website",
    images: [
      {
        url: "https://autoexpress.com/images/social-preview.jpg", // Reemplaza con la URL real de la imagen
        width: 1200,
        height: 630,
        alt: "AutoExpress - Elimina tus Fotomultas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@AutoExpress", // Reemplaza con el usuario real de Twitter si tienes
    title: "AutoExpress - Elimina tus Fotomultas",
    description: "Impugna y elimina tus fotomultas con el respaldo de abogados expertos. Consulta ya para un ahorro de hasta el 90%.",
   /*  image: "https://autoexpress.com/images/social-preview.jpg" */ // Reemplaza con la URL real de la imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
