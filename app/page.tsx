import Background from "@/app/ui/background";
import Hero from '@/app/ui/starting-page/hero';
import { StartButton, SignInButton } from '@/app/ui/starting-page/buttons';
import Link from 'next/link';

export default function Page() {
    return (
        <Background>
            <div className="pt-30">
                <Hero />
            </div>
            <div className="flex flex-row gap-12 justify-center mt-30">
                <StartButton />
                <SignInButton />
            </div>
        </Background>
    );
}