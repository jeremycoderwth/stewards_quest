import Background from '@/app/ui/background';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Background>
                {children}
            </Background>
        </>
    ); 
}