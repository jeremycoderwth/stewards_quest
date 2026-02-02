import Hero from '@/app/ui/starting-page/hero';
import { StartButton, SignInButton } from '@/app/ui/starting-page/buttons';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <div className="pt-30">
                <Hero />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-center mt-30">
                <StartButton />
                <SignInButton />
            </div>
        </div>
    );
}