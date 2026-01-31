'use client';

import { Button } from '@/app/ui/button';
import primaryImage from '@/public/buttons/Gooey_no_text.png';
import styles from '@/app/ui/home.module.css';

export function StartButton() {
    const { width, height } = primaryImage;
    
    const sayStart = () => {
        alert(`Game Start!!!`);
    };

    return (
        <div className={styles.buttonImage} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button 
                onClick={sayStart}
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
            >
                Sign In
            </Button>
        </div>
    );
}