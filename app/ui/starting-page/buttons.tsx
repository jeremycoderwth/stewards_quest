'use client';

import { Button } from '@/app/ui/button';
import primaryImage from '@/public/buttons/Gooey_no_text.png';
import styles from '@/app/ui/home.module.css';

export function StartButton() {
    const sayStart = () => {
        alert(`Game Start!!!`);
    };

    return (
        <div className={styles.buttonImage} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button 
                onClick={sayStart}
                className="absolute top-3 start-12.5"
            >
                Start
            </Button>
        </div>
    );
}

export function SignInButton() {
    const saySignIn = () => {
        alert('Please, sign in first');
    };

    return (
        <div className={styles.buttonImage} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button 
                onClick={saySignIn}
                className="absolute top-3 start-8"
            >
                Sign In
            </Button>
        </div>
    );
}