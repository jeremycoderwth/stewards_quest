"use client";

import { StartButton, SignInButton } from '@/app/ui/starting-page/buttons';
import Link from 'next/link';

export default function LandingPage() {

    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center justify-center mt-30">
            <Link href="/rationale">
                <StartButton />
            </Link>
            <SignInButton />
        </div>
    );
}