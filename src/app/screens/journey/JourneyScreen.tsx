import React from 'react';
import styles from './JourneyScreen.module.css';

export default function JourneyScreen() {
    return (
        <div className={styles.container}>
            <h1 className={`${styles.name} fascinate-font`}>Yosif Ibrahim</h1>
            <p className={styles.description}>I am passionate about building innovative solutions and learning new technologies.</p>

            <div className={styles.timeline}>
                {/* <div className={styles.title}>My Journey</div> */}
                <div className={styles.verticalLine} />
                <div className={styles.experience}>
                    React-Native Developer - The Dev House 
                </div>
            </div>
        </div>
    );
}