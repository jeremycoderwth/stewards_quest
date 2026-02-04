import { deforestationMeaning } from '@/app/lib/data';

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