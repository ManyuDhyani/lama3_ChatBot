// import Image from "next/image";
import LeftSection from "@/components/LeftSection";
import styles from "./page.module.css";
import RightSection from "@/components/RightSection";

export default function Home() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <LeftSection/>
      </div>
      <div className={styles.rightOut}>
        <RightSection/>
      </div>
    </div>
  );
}
