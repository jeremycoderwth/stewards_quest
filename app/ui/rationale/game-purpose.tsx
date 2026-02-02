import { gamePurposeParagraphs } from '@/app/lib/definitions';

export default function GamePurpose() {
    return (
        <div>
            <h1>Game Purpose</h1>
            <div className="p-4 bg-black/30 rounded-lg">
                <p className="text-white text-sm">
                    {gamePurposeParagraphs[0].text}
                </p>
                <p className="text-white text-sm">
                    {gamePurposeParagraphs[1].text}
                </p>
            </div>
            <div>
                <p className="text-white text-sm">
                    {gamePurposeParagraphs[2].text}
                </p>
            </div>
        </div>
    );
}