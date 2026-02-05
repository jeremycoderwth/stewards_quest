'use client';

import Button from '@/app/ui/button';
import primaryImage from '@/public/buttons/Gooey_no_text.png';
import styles from '@/app/ui/home.module.css';

interface ButtonProps {
    label: string;
    imageSrc: string;
    onClick?: () => void;
    className?: string;
};

export function ImageButton({ label, imageSrc, onClick, className }: ButtonProps) {
    return (
        <div className={styles.buttonImage} style={{ backgroundImage: `url(${imageSrc})` }}>
            <Button onClick={onClick} className={className ?? ""}>
                {label}
            </Button>
        </div>
    );
}

export function StartButton() {
    return (
        <div className={styles.buttonImage} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button 
                className="absolute top-3 start-6"
            >
                Continue
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

export function ConfirmButton({ onClick }: { onClick: () => void }) {
    return (
        <div className={styles.buttonWithAnimation} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button onClick={onClick} className='absolute top-3 start-8'>
                Confirm
            </Button>
        </div>
    );
}

export function ProceedButton() {
    return (
        <div className={styles.buttonWithAnimation} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button className='absolute top-3 start-0 text-xs'>
                Proceed to Game
            </Button>
        </div>
    );
}

export function EnterGame() {
    return (
        <div className={styles.buttonWithAnimation} style={{ backgroundImage: `url(${primaryImage.src})` }}>
            <Button className='absolute top-4 start-7 text-xs'>
                Enter Game
            </Button>
        </div>
    );
}