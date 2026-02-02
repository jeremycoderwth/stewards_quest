import pixelBackground from '@/public/backgrounds/jungle-landscape.jpg';

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Background({ children, className, ...rest }: BackgroundProps) {
    return (
        <main className={`bg-cover bg-center h-240 w-screen lg:h-screen flex lg:items-center justify-center ${className}`} style={{ backgroundImage: `url(${pixelBackground.src})` }} {...rest}>
            {children}
        </main>
    );
}
