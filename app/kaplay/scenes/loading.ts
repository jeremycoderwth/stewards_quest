import { KAPLAYCtx } from "kaplay";

export function loadingScreen(k: KAPLAYCtx) {
    k.scene("loading", () => {
        const loadingText = k.add([
            k.text("Loading...", { size: 24, font: "PressStart2P" }),
            k.pos(k.center()),
            k.anchor("center"),
            k.color(255, 255, 255)
        ]);

        let dots = 0;
        let timer = 0;
        const speed = 0.4;

        loadingText.onUpdate(() => {
            timer += k.dt();

            if (timer >= speed) {
                timer = 0;
                dots = (dots + 1) % 4;
                loadingText.text = "Loading" + ".".repeat(dots);
            }
        });

        // show the instruction page/scene
        k.wait(3, () => {
            k.go("instructions");
        });
    });
}