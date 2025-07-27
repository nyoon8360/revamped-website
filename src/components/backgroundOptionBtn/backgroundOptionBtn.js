'use client';

import Image from "next/image";
import styles from "./backgroundOptionBtn.module.scss";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function BackgroundOptionBtn({ id, backgroundValue, imgSrc, children }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className={styles.mainContainer}>
      <Link id={id} href={generateRoute(pathname, searchParams, backgroundValue)}>
        <Image src={imgSrc} alt="" height={50} width={50}></Image>
      </Link>
      <label htmlFor={id}>
        {children}
      </label>
    </div>
  );
}

function generateRoute(pathname, currentParams, newParamVal) {
  let newSearchParamString = new URLSearchParams(currentParams.toString());

  newSearchParamString.set('background', newParamVal);

  return `${pathname}?${newSearchParamString.toString()}`;
}