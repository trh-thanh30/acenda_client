import "@/app/globals.css";
import Header from "../../components/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
