'use client';

import BackgroundOptionBtn from '@/components/backgroundOptionBtn/backgroundOptionBtn';
import styles from './defaultLanding.module.scss';

export default function DefaultLanding() {
    const backgroundOptions = [
        {
            id: "lakeOptionButton",
            label: "Lake",
            backgroundValue: "lake",
            imgSrc: "/images/test-icon.png"
        },
        {
            id: "oceanOptionButton",
            label: "Ocean",
            backgroundValue: "ocean",
            imgSrc: "/images/test-icon.png"
        }
    ];

    backgroundOptions.map((element) => {
        console.log(element);
    });

    return (
        <main className={styles.mainElement}>
            <h1 className={styles.headerText}>Where would you like to go?</h1>
            <div className={styles.backgroundOptionsContainer}>
                {backgroundOptions.map((option) => (
                    <BackgroundOptionBtn key={option.id} id={option.id} backgroundValue={option.backgroundValue} imgSrc={option.imgSrc}>
                        {option.label}
                    </BackgroundOptionBtn>
                ))}
            </div>
        </main>
    );
}