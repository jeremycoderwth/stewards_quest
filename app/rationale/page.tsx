import { Metadata } from 'next';
import PreGame from '@/app/ui/rationale/pre-game';

export const metadata: Metadata = {
    title: "Lobby | Steward's Quest",
};

export default function Page() {
    return (
        <div>
            <PreGame />
        </div>
    );
}