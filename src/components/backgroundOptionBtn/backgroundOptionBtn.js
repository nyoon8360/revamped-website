import Image from "next/image";
import { useBackgroundStore } from '@/stores/background-store';
import styles from "./backgroundOptionBtn.module.scss";

export default function BackgroundOptionBtn({ id, backgroundValue, imgSrc, children }) {
  const { setBackground } = useBackgroundStore();

  return (
    <div className={styles.mainContainer}>
      <button id={id} onClick={(backgroundValue) => setBackground(backgroundValue)}>
        <Image src={imgSrc} alt="" height={50} width={50}></Image>
      </button>
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
}
