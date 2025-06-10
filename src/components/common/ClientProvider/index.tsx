import useShowScrollbar from "@/hooks/useShowScrollbar";
import "@/styles/global.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "../Footer";
import Header from "../Header";
import * as styles from "./styles.css";

type ClientProviderProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: ClientProviderProps) => {
  useShowScrollbar();
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </div>
  );
};

export default ClientProvider;
