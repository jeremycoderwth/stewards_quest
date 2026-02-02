'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import GamePurpose from './game-purpose';
import Terms from './terms';
import Introduction from './introduction';
import Button from '@/app/ui/button';

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
        } else {
            router.push('/game');
        }
    };

    return (
        <>
            <div>
                {pages[currentPage].component}
            </div>
            <Button onClick={handleConfirm} className='mt-6'>
                {currentPage < pages.length - 1 ? 'Proceed to Game' : 'Confirm'}
            </Button>
        </>
    );
}