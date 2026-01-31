import pixelBackground from '@/public/backgrounds/jungle-landscape.jpg';
import homeStyles from './home.module.css';

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Background({ children, className, ...rest }: BackgroundProps) {
    return (
        <div className={`${homeStyles.pixelContainer} ${className}`} style={{ backgroundImage: `url(${pixelBackground.src})` }} {...rest}>
            {children}
        </div>
    );
}
