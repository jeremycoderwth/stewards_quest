'use client';

import { useState } from 'react';
import Link from 'next/link';

import GamePurpose from './game-purpose';
import Terms from './terms';
import Introduction from './introduction';
import { ConfirmButton, ProceedButton } from '@/app/ui/starting-page/buttons';

export default function PreGame() {
    const pages = [
        { key: 'purpose', component: <GamePurpose /> },
        { key: 'terms', component: <Terms /> },
        { key: 'introduction', component: <Introduction /> },
    ];
    const [currentPage, setCurrentPage] = useState(0);
    
    const handleConfirm = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <div className='mb-4'>
                {pages[currentPage].component}
            </div>
            <div className='flex items-center justify-center'>
                {currentPage < pages.length - 1
                    ? <ConfirmButton onClick={handleConfirm} />
                    : <Link href="/game"><ProceedButton /></Link>
                }
            </div>

        </>
    );
}