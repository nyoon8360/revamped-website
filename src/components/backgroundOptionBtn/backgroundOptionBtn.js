import Image from "next/image";
import styles from "./backgroundOptionBtn.module.scss";
import { useBackgroundContext } from "@/context/background";

export default function BackgroundOptionBtn({ id, backgroundValue, imgSrc, children }) {

  const [background, setBackground] = useBackgroundContext();

  console.log(background);

  return (
    <div className={styles.mainContainer}>
      <button id={id} onClick={() => setBackground(backgroundValue)}>
        <Image src={imgSrc} alt="" height={50} width={50}></Image>
      </button>
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
}