import "@/styles/global.css";
import Header from "../Header";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/next";

type ClientProviderProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  return (
    <>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
};

export default ClientProvider;
