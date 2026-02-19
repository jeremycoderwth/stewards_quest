import { gamePurposeParagraphs } from '@/app/lib/data';

export default function GamePurpose() {
    return (
        <div className='p-4 bg-black/30 rounded-lg min-w-2xl md:w-3xl lg:w-4xl'>
            <h1 className='text-green-200 font-semibold text-center mb-4 text-lg md:text-xl lg:text-2xl'>Game Purpose</h1>
            <div className='flex flex-col gap-2'>
                <p className="text-white text-xs md:text-sm lg:text-md">
                    {gamePurposeParagraphs[0].text}
                </p>
                <p className="text-white text-xs md:text-sm lg:text-md mb-4">
                    {gamePurposeParagraphs[1].text}
                </p>
            </div>
            <div>
                <p className="text-white text-xs md:text-sm lg:text-md leading-6">
                    {gamePurposeParagraphs[2].text}
                </p>
            </div>
        </div>
    );
}