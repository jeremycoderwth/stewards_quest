import { deforestationMeaning } from '@/app/lib/definitions';

export default function Introduction() {
    return (
        <div>
            <h1>Introduction to Deforestation</h1>
            <div>
                {deforestationMeaning.map((meaning, key) => (
                    <p key={key}>
                        {meaning.text}
                    </p>
                ))}
            </div>
        </div>
    );
}