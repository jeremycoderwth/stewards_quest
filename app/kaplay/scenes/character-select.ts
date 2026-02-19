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
        k.color(20, 30, 21),
        k.scale(.5),
        "character-ui"
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
        k.rect(100, 40, { radius: 8 }),
        k.pos(k.center().x, 290),
        k.anchor("center"),
        k.area(),
        k.outline(3),
        k.color(255, 250, 250),
        "btn-ui"
    ]);
    
    confirm.add([
        k.text("CONFIRM", { size: 12, align: "center" }),
        k.anchor("center"),
        k.color(0, 0, 0),
        "btn-ui"
    ]);

    confirm.onClick(() => {
        onConfirm(characters[currentIndex]);
    });
}