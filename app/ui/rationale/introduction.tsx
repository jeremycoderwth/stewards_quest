import { deforestationMeaning } from '@/app/lib/data';

export default function Introduction() {
    return (
        <div>
            <div className='bg-black/30 p-4'>
                <h1 className='text-green-200 font-semibold text-center mb-4 text-lg md:text-xl lg:text-2xl'>Introduction to Deforestation</h1>
            </div>
            <div className='bg-black/30 p-4 flex items-center flex-col justify-center gap-4 w-xs md:w-2xl lg:w-3xl'>
                {deforestationMeaning.map((meaning, key) => (
                    <p key={key} className='text-white text-sm md:text-sm lg:text-md leading-6 text-justify'>
                        {meaning.text}
                    </p>
                ))}
            </div>
        </div>
    );
}