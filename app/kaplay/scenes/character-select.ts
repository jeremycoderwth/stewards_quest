import { characters } from "@/app/lib/data";
import type { KAPLAYCtx } from "kaplay";
import type { Character } from "@/app/lib/definitions";

export function characterSelectScene(k: KAPLAYCtx, onConfirm: (character: Character) => void) {
    let currentIndex = 0;
    let currentCharacter = k.add([
        k.sprite(characters[currentIndex].sprite),
        k.pos(
            k.center().x, 
            200
        ),
        k.anchor("center"),
        k.scale(3)
    ]);

    const nameText = k.add([
        k.text(characters[currentIndex].name),
        k.pos(
            k.center().x,
            240
        ),
        k.anchor('center'),
        k.scale(.5),
        k.color(0, 0, 0)
    ]);

    const showCharacter = (index: number) => {
        if (currentCharacter) {
            currentCharacter.destroy();
        }

        const data = characters[index];

        currentCharacter = k.add([
            k.sprite(data.sprite),
            k.pos(
                k.center().x, 
                150
            ),
            k.anchor("center"),
            k.scale(.5)
        ]);

        nameText.text = data.name;
    };

    showCharacter(currentIndex);

    // left button
    const arrowLeft = k.add([
        k.sprite("arrowLeft"),
        k.pos(60, 160),
        k.anchor("center"),
        k.scale(.2),
        k.area()
    ]);

    arrowLeft.onClick(() => {
        currentIndex = (currentIndex - 1 + characters.length) % characters.length;
        showCharacter(currentIndex);
    });

    // right button
    const arrowRight = k.add([
        k.sprite("arrowRight"),
        k.pos(320, 160),
        k.anchor("center"),
        k.scale(.2),
        k.area()
    ]);

    arrowRight.onClick(() => {
        currentIndex = (currentIndex + 1) % characters.length;
        showCharacter(currentIndex);
    });

    // confirm button
    const confirm = k.add([
        k.text("CONFIRM"),
        k.pos(k.center().x, 290),
        k.anchor("center"),
        k.area(),
        k.scale(.5),
        k.color(0, 0, 0)
    ]);

    confirm.onClick(() => {
        onConfirm(characters[currentIndex]);
    });
}