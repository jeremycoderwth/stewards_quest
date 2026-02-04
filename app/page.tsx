import Hero from '@/app/ui/starting-page/hero';
import LandingPage from '@/app/ui/starting-page/landing';

export default function Page() {

    return (
        <div>
            <div className="pt-30">
                <Hero />
            </div>
            <LandingPage />
        </div>
    );
}