'use client';

import { EnterGame } from "./buttons";
import Link from 'next/link';

export default function Greeting() {

    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <div className='bg-black/20 rounded-lg mb-4 p-4'>
                <h1 className="animate-bounce text-2xl font-bold text-center text-green-400 my-4">Steward&apos;s Quest</h1>
                <p className="text-white uppercase text-sm text-center">capstone project</p>
            </div>
            <div>
                <Link href='/game/selection'>
                    <EnterGame />
                </Link>
            </div>
        </div>
    );
}