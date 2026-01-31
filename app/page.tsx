import Background from "@/app/ui/background";
import Hero from '@/app/ui/starting-page/hero';
import { StartButton, SignInButton } from '@/app/ui/starting-page/buttons';

export default function Page() {
    return (
        <Background>
            <div className="pt-30">
                <Hero />
            </div>
            <div className="flex flex-row gap-5 justify-center mt-10 h-15">
                <StartButton />
                <SignInButton />
            </div>
        </Background>
    );
}