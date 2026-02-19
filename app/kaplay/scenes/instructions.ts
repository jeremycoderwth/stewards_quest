import { KAPLAYCtx } from "kaplay";
import { mechanics } from "@/app/lib/data";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function instructionsScene(k: KAPLAYCtx, router: AppRouterInstance) {
  const displayedMechanics = new Set<number>();
  const pad = 24;

  let mechanic = 0;

  k.scene("instructions", () => {
    let currentMechanic = k.add([
      k.text(mechanics[mechanic].text, {
        size: 16,
        width: k.width() - pad * 2,
        font: "PressStart2P",
        align: "center",
        letterSpacing: 2,
        lineSpacing: 8
      }),
      k.pos(k.center().x, 100),
      k.anchor("center")
    ]);

    const displayMechanic = (key: number) => {
      if (currentMechanic) {
        currentMechanic.destroy();
      }

      const textString = mechanics[key];

      k.wait(0.2, () => {
        currentMechanic = k.add([
            k.text(textString.text, {
              size: 16,
              width: k.width() - pad * 2,
              font: "PressStart2P",
              align: "center",
              letterSpacing: 2,
              lineSpacing: 8
            }),
            k.pos(k.center().x, 100),
            k.anchor("center"),
        ]);
      });

      displayedMechanics.add(key);

      if (displayedMechanics.size === mechanics.length) {
        startButton.opacity = 1; // show start button when reached the end of mechanic
        startText.opacity = 1;
      }
    };

    displayMechanic(mechanic);

    // left button
    const arrowLeft = k.add([
      k.sprite("arrowLeftBold"),
      k.pos(30, k.center().y),
      k.anchor("center"),
      k.scale(0.3),
      k.area(),
    ]);

    arrowLeft.onClick(() => {
      mechanic = (mechanic - 1 + mechanics.length) % mechanics.length;
      displayMechanic(mechanic);
    });

    // right button
    const arrowRight = k.add([
      k.sprite("arrowRightBold"),
      k.pos(720, k.center().y),
      k.anchor("center"),
      k.scale(0.3),
      k.area(),
    ]);

    arrowRight.onClick(() => {
      mechanic = (mechanic + 1) % mechanics.length;
      displayMechanic(mechanic);
    });

    // start button (parent background object)
    const startButton = k.add([
      k.rect(140, 40, { radius: 8 }),
      k.pos(k.center().x, 320),
      k.anchor("center"),
      k.scale(1),
      k.outline(4),
      k.color(184, 252, 168),
      k.area(),
      k.opacity(0), // hidden first
    ]);

    // text for start button (child object)
    const startText = startButton.add([
      k.text("START", { size: 16, font: "PressStart2P" }),
      k.anchor("center"),
      k.color(0, 0, 0),
      k.opacity(0) // hidden first
    ]);

    startButton.onClick(() => {
      router.push("/game/quest");
    });
  });
}