import * as styles from "./styles.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
