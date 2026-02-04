"use client";

import { StartButton, SignInButton } from '@/app/ui/starting-page/buttons';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const router = useRouter();

    const handleContinue = () => {
        router.push('/rationale');
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-center mt-30">
            <StartButton onClick={handleContinue} />
            <SignInButton />
        </div>
    );
}