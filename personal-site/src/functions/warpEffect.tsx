type Entity = {
  x: number;
  y: number;
  previousPosition: {
    x: number;
    y: number;
  };
  velocity: {
    x: number;
    y: number;
  };
  isSpawned: boolean;
  color: { red: number; green: number; blue: number };
  opacity: number;
};

const warpEffect = () => {
  const canvas = document.querySelector("canvas");
  const context = canvas?.getContext("2d");

  let isPower = false;
  let maxPower = 200;
  let power = 1;
  let entities: Array<Entity> = [];
  let colors = [
    { red: 117, green: 197, blue: 209 },
    { red: 78, green: 197, blue: 209 },
    { red: 78, green: 143, blue: 209 },
    { red: 97, green: 143, blue: 209 },
    { red: 25, green: 75, blue: 154 },
    { red: 171, green: 197, blue: 227 },
    { red: 201, green: 184, blue: 231 },
    { red: 140, green: 162, blue: 217 },
    { red: 248, green: 89, blue: 31 },
  ];

  function random(value: number, offset: number) {
    return value + Math.floor((Math.random() - 0.5) * offset);
  }

  function spawnEntity() {
    let x = canvas!.width / 2;
    let y = canvas!.height / 2;
    let velocity = {
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
    };
    let offset = {
      x: random(125, 50) * velocity.x,
      y: random(125, 50) * velocity.y,
    };

    entities.push({
      x: x + offset.x,
      y: y + offset.y,
      previousPosition: { x: 0, y: 0 },
      velocity,
      isSpawned: false,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0,
    });
  }

  function update() {
    context!.fillStyle = "rgba(0, 0, 0, 0.2)";
    context!.fillRect(0, 0, canvas!.width, canvas!.height);

    entities.forEach((entity, index) => {
      if (isPower) {
        if (entity.opacity <= 0.75 && !entity.isSpawned) {
          entity.opacity = Math.min(0.75, entity.opacity + 0.125);

          if (entity.opacity === 0.75) {
            entity.isSpawned = true;
          }
        }
      } else {
        if (!entity.isSpawned) {
          entity.opacity = 0.75;
          entity.isSpawned = true;
        }
      }

      context!.globalCompositeOperation = "lighter";

      const distance = Math.hypot(
        canvas!.width / 2 - entity.x,
        canvas!.height / 2 - entity.y
      );
      const multiplier = distance / 200;
      context!.beginPath();
      context!.arc(entity.x, entity.y, 0.5 * multiplier, Math.PI * 2, 0);
      context!.closePath();
      context!.fillStyle = `rgba(${entity.color.red}, ${entity.color.green}, ${entity.color.blue}, ${entity.opacity})`;
      context!.fill();

      context!.beginPath();
      context!.moveTo(entity.x, entity.y);
      context!.lineTo(
        entity.previousPosition.x || entity.x,
        entity.previousPosition.y || entity.y
      );
      context!.closePath();
      context!.lineWidth = multiplier;
      context!.strokeStyle = `rgba(${entity.color.red}, ${entity.color.green}, ${entity.color.blue}, ${entity.opacity})`;
      context!.stroke();

      context!.globalCompositeOperation = "source-over";

      [entity.previousPosition.x, entity.previousPosition.y] = [
        entity.x,
        entity.y,
      ];

      entity.x += entity.velocity.x * (power / (maxPower / 1.25));
      entity.y += entity.velocity.y * (power / (maxPower / 1.25));

      if (entity.isSpawned) {
        entity.opacity *= 0.9875;
      }

      if (isPower) {
        entity.velocity.x *= 1.25;
        entity.velocity.y *= 1.25;
      }

      if (
        entity.previousPosition.x < 0 ||
        entity.previousPosition.x > canvas!.width ||
        entity.previousPosition.y < 0 ||
        entity.previousPosition.y > canvas!.height ||
        entity.opacity <= 5e-2
      ) {
        entities.splice(index, 1);
      }
    });

    for (let i = 0; i < Math.floor(power); i++) {
      spawnEntity();
    }

    if (isPower) {
      power = Math.min(maxPower, power + 0.35);
    } else {
      power = Math.max(1, power * 0.85);
    }

    requestAnimationFrame(update);
  }

  function resize() {
    [canvas!.width, canvas!.height] = [window.innerWidth, window.innerHeight];

    entities = [];
  }

  function init() {
    /*For when the user is supposed to control the warp

    ["mouseover", "touchstart"].forEach((type) => {
      canvas!.addEventListener(type, (event) => {
        event.preventDefault();

        isPower = true;
      });
    });

    ["mouseout", "touchend"].forEach((type) => {
      canvas!.addEventListener(type, (event) => {
        event.preventDefault();

        isPower = false;
      });
    });
     */

    setTimeout(() => {
      isPower = true;
    }, 0);
    setTimeout(() => {
      isPower = false;
    }, 4000);

    /*
    window.addEventListener("mousemove", () => {
      power = Math.min(maxPower, power * 1.125);
    });
  */
    resize();

    requestAnimationFrame(update);
  }

  window.addEventListener("resize", resize);
  init();
};

export { warpEffect };
