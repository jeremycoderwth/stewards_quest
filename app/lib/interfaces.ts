import testButton from '@/public/buttons/Gooey_no_text.png';
import { ImageButtonProps } from "@/app/lib/definitions";

export const helloButton: ImageButtonProps = {
    src: testButton.src,
    alt: 'hello button',
    onClick: () => { alert("Hello from the button!"); },
    classnames: 'mt-4',
    text: 'Hello',
};
