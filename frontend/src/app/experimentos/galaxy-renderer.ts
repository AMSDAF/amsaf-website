export const frame = { width: 1200, height: 650 };
export const safeArea = { left: 0.27, top: 0.28, width: 0.46, height: 0.4 };

export const defaultSettings = {
  seed: "AMSAF-01",
  arms: 3,
  density: 28000,
  curvature: 1.9,
  dispersion: 0.9,
  scale: 1,
  rotation: -28,
  brightness: 1,
  horizontal: 0,
  vertical: 0,
};

export type GalaxySettings = typeof defaultSettings;

export function randomFromSeed(seed: string) {
  let state = 2166136261;
  for (let index = 0; index < seed.length; index++) {
    state = Math.imul(state ^ seed.charCodeAt(index), 16777619);
  }

  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

type ParticleVisitor = (
  x: number,
  y: number,
  size: number,
  opacity: number,
  samplePosition: (progress: number) => readonly [number, number],
) => boolean;

function safeAreaFade(x: number, y: number) {
  const dx = Math.abs(x / frame.width - safeArea.left - safeArea.width / 2);
  const dy = Math.abs(y / frame.height - safeArea.top - safeArea.height / 2);
  const distance = Math.hypot(
    dx / (safeArea.width / 2),
    dy / (safeArea.height / 2),
  );
  const edge = Math.max(0, Math.min(1, (distance - 0.52) / 0.77));
  return 0.08 + 0.92 * edge * edge * (3 - 2 * edge);
}

export function renderGalaxy(
  ctx: CanvasRenderingContext2D,
  settings: GalaxySettings,
  takeParticle?: ParticleVisitor,
) {
  const { width, height } = frame;
  const random = randomFromSeed(settings.seed);
  const rotation = (settings.rotation * Math.PI) / 180;
  const cosRotation = Math.cos(rotation);
  const sinRotation = Math.sin(rotation);
  const centerX = width * (0.5 + settings.horizontal / 100);
  const centerY = height * (0.45 + settings.vertical / 100);
  const particleLayers = [
    { size: 0.82, opacity: 0.26 },
    { size: 1.2, opacity: 0.49 },
    { size: 1.62, opacity: 0.72 },
    { size: 2.2, opacity: 0.94 },
  ];

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#fff";
  ctx.lineCap = "round";
  ctx.lineWidth = 0.75;

  for (let arm = 0; arm < settings.arms; arm++) {
    const phase = (arm / settings.arms) * Math.PI * 2 + (random() - 0.5) * 0.65;
    const reach = 610 + random() * 225;
    const winding = 0.83 + random() * 0.33;
    const flattening = 0.49 + random() * 0.19;
    const wave = random() * Math.PI * 2;
    const weight = 0.68 + random() * 0.32;

    function position(t: number, offset: number) {
      const radius = 20 + reach * t ** 1.51 + offset;
      const angle = phase + settings.curvature * winding * Math.log1p(t * 5.5);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle) * flattening;
      // Smooth shear bends neighboring particles together across each arm.
      const flowX = x + 30 * t * Math.sin(y / 120 + x / 220 + wave);
      const flowY = y + 26 * t * Math.sin(x / 145 - y / 165 + wave);
      return [
        centerX + settings.scale * (flowX * cosRotation - flowY * sinRotation),
        centerY + settings.scale * (flowX * sinRotation + flowY * cosRotation),
      ] as const;
    }

    const count = Math.ceil(settings.density / settings.arms);
    for (let index = 0; index < count; index++) {
      const t = 0.065 + 0.935 * random() ** 0.78;
      const knot = 0.73 + 0.27 * Math.sin(t * 16 + wave);
      const taper = Math.min(1, (1 - t) * 5);
      if (random() > knot * taper * weight) continue;

      const depth = random();
      const layer =
        particleLayers[
          depth < 0.43 ? 0 : depth < 0.86 ? 1 : depth < 0.988 ? 2 : 3
        ];
      const plume = random() < 0.28 ? 2.6 : 1;
      const scatter = (random() + random() + random() - 1.5) * plume;
      const offset = scatter * (12 + t * t * 88) * settings.dispersion;
      const [x, y] = position(t, offset);
      const size = layer.size * (0.67 + random() * 0.69);
      const opacity = Math.min(
        1,
        layer.opacity *
          (0.54 + random() * 0.46) *
          settings.brightness *
          safeAreaFade(x, y),
      );
      if (
        takeParticle?.(x, y, size, opacity, (progress) =>
          position(t + progress, offset),
        )
      ) {
        continue;
      }
      ctx.globalAlpha = opacity;
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
    }

    for (let fragment = 0; fragment < 28; fragment++) {
      const start = 0.17 + random() * 0.73;
      const length = 0.005 + random() * 0.023;
      const offset = (random() - 0.5) * 72 * settings.dispersion;
      const [x, y] = position(start, offset);
      ctx.globalAlpha = Math.min(
        0.25,
        (0.06 + random() * 0.14) * settings.brightness * safeAreaFade(x, y),
      );
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let segment = 1; segment <= 4; segment++) {
        const [nextX, nextY] = position(start + (length * segment) / 4, offset);
        ctx.lineTo(nextX, nextY);
      }
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
}
