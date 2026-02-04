import { termsAndConditions } from '@/app/lib/data';

export default function Terms() {
    return (
        <div>
            <h1 className='text-green-300 font-semibold lg:text-2xl text-center mb-4 text-lg md:text-xl'>Terms and Conditions</h1>
            <div className='bg-black/20 p-4 flex items-center flex-col justify-center gap-4 w-xs md:w-2xl lg:w-3xl'>
                {termsAndConditions.map((term, key) => (
                    <p key={key} className='text-white text-xs md:text-sm lg:text-md leading-6'>
                      {term.text}  
                    </p>
                ))}
            </div>
        </div>
    );
}