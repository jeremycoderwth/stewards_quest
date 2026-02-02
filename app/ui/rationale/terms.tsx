import { termsAndConditions } from '@/app/lib/definitions';

export default function Terms() {
    return (
        <div>
            <h1>Terms and Conditions</h1>
            <div>
                {termsAndConditions.map((term, key) => (
                    <p key={key}>
                      {term.text}  
                    </p>
                ))}
            </div>
        </div>
    );
}