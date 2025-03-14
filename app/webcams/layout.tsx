import Navbar from "@/ui/navbar";
import Webcams from "./page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Webcams />
    </>
  );
}
