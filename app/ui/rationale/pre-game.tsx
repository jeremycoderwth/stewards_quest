'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import GamePurpose from './game-purpose';
import Terms from './terms';
import Introduction from './introduction';
import { ConfirmButton, ProceedButton } from '@/app/ui/starting-page/buttons';

export default function PreGame() {
    const router = useRouter();

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

    const handleProceed = () => {
        router.push('/game/play');
    };

    return (
        <>
            <div className='mb-4'>
                {pages[currentPage].component}
            </div>
            {currentPage < pages.length - 1
                ? <ConfirmButton onClick={handleConfirm} />
                : <ProceedButton onClick={handleProceed} />
            }
        </>
    );
}