import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NamCom Generations',   
  description: 'Noticias rápidas del mundo gamer, actualizadas y legales.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-r from-blue-500 to-indigo-700 bg-fixed text-white">
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-5xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
