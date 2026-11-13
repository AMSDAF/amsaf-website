"use client";

import { useEffect, useRef, useState } from "react";
import {
  defaultSettings,
  frame,
  renderGalaxy,
  safeArea,
  type GalaxySettings,
} from "../galaxy-renderer";

const controls = [
  { key: "arms", label: "Braços espirais", min: 2, max: 7, step: 1 },
  { key: "density", label: "Densidade", min: 3000, max: 60000, step: 1000 },
  { key: "curvature", label: "Curvatura", min: 0.5, max: 3.5, step: 0.05 },
  { key: "dispersion", label: "Dispersão", min: 0.2, max: 2, step: 0.05 },
  {
    key: "scale",
    label: "Escala",
    min: 0.55,
    max: 1.7,
    step: 0.05,
    suffix: "×",
  },
  {
    key: "rotation",
    label: "Rotação",
    min: -180,
    max: 180,
    step: 1,
    suffix: "°",
  },
  {
    key: "brightness",
    label: "Brilho",
    min: 0.25,
    max: 2,
    step: 0.05,
    suffix: "×",
  },
  {
    key: "horizontal",
    label: "Posição horizontal",
    min: -35,
    max: 35,
    step: 1,
    suffix: "%",
  },
  {
    key: "vertical",
    label: "Posição vertical",
    min: -35,
    max: 35,
    step: 1,
    suffix: "%",
  },
] as const satisfies readonly {
  key: Exclude<keyof GalaxySettings, "seed">;
  label: string;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}[];

const numberFormat = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 2,
});
const secondaryAction =
  "action-target justify-center border border-border-strong px-4 text-content hover:bg-surface-muted";

function getBitmapWidth(canvas: HTMLCanvasElement) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  return Math.min(frame.width * 2, Math.round(canvas.clientWidth * ratio));
}

function paint(
  canvas: HTMLCanvasElement,
  width: number,
  settings: GalaxySettings,
) {
  if (width <= 0) return;
  const height = Math.round((width * frame.height) / frame.width);

  if (canvas.width !== width) canvas.width = width;
  if (canvas.height !== height) canvas.height = height;

  const context = canvas.getContext("2d", { alpha: false });
  if (!context) return;
  context.setTransform(width / frame.width, 0, 0, height / frame.height, 0, 0);
  renderGalaxy(context, settings);
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function GalaxyLab() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bitmapWidth, setBitmapWidth] = useState(0);
  const [settings, setSettings] = useState(defaultSettings);
  const [showSafeArea, setShowSafeArea] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const measure = () => setBitmapWidth(getBitmapWidth(canvas));
    let resolution = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`,
    );
    function watchResolution() {
      resolution.removeEventListener("change", watchResolution);
      resolution = window.matchMedia(
        `(resolution: ${window.devicePixelRatio}dppx)`,
      );
      resolution.addEventListener("change", watchResolution);
      measure();
    }
    const observer = new ResizeObserver(measure);
    observer.observe(canvas);
    window.addEventListener("resize", measure);
    resolution.addEventListener("change", watchResolution);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      resolution.removeEventListener("change", watchResolution);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const request = requestAnimationFrame(() =>
      paint(canvas, bitmapWidth, settings),
    );
    return () => cancelAnimationFrame(request);
  }, [bitmapWidth, settings]);

  function exportSettings() {
    const json = JSON.stringify({ ...settings, showSafeArea }, null, 2);
    download(
      new Blob([json + "\n"], { type: "application/json" }),
      "amsaf-galaxia.json",
    );
    setStatus("Arquivo JSON gerado.");
  }

  function exportImage() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    paint(canvas, getBitmapWidth(canvas), settings);
    canvas.toBlob((blob) => {
      if (!blob) {
        setStatus("Não foi possível gerar o PNG.");
        return;
      }
      download(blob, "amsaf-galaxia.png");
      setStatus("Arquivo PNG gerado.");
    }, "image/png");
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_19rem]">
      <section
        aria-labelledby="galaxy-preview-title"
        className="min-w-0 overflow-hidden rounded-card border border-rule bg-surface"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule px-4 py-3">
          <h2 id="galaxy-preview-title" className="font-semibold">
            Prévia
          </h2>
          <span className="font-mono text-label-sm text-content-muted">
            Canvas 2D · Composição estática
          </span>
        </div>
        <div className="relative bg-black">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Prévia da galáxia espiral em branco e cinza sobre fundo preto"
            className="block w-full"
            style={{ aspectRatio: `${frame.width} / ${frame.height}` }}
          >
            A prévia requer suporte a Canvas 2D.
          </canvas>
          {showSafeArea && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-control border border-dashed border-accent-text"
              style={{
                left: `${safeArea.left * 100}%`,
                top: `${safeArea.top * 100}%`,
                width: `${safeArea.width * 100}%`,
                height: `${safeArea.height * 100}%`,
              }}
            />
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule p-4">
          <label className="inline-flex min-h-11 items-center gap-2 text-body-sm">
            <input
              type="checkbox"
              checked={showSafeArea}
              onChange={(event) => setShowSafeArea(event.currentTarget.checked)}
              className="size-4 accent-accent"
            />
            Mostrar área reservada para o título
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className={secondaryAction}
              onClick={exportSettings}
            >
              Exportar JSON
            </button>
            <button
              type="button"
              className="action-target justify-center bg-inverse px-4 text-on-inverse hover:bg-inverse-hover"
              onClick={exportImage}
            >
              Exportar PNG
            </button>
          </div>
        </div>
        <p role="status" className="sr-only">
          {status}
        </p>
      </section>
      <fieldset className="min-w-0 rounded-card border border-rule bg-surface px-4 pb-4">
        <legend className="px-2 font-display text-title">Parâmetros</legend>
        <div className="grid gap-2">
          <label className="grid gap-1 text-body-sm">
            Semente
            <input
              className="min-h-11 w-full rounded-control border border-border-strong bg-canvas px-3 font-mono text-content"
              type="text"
              maxLength={80}
              spellCheck={false}
              value={settings.seed}
              onChange={(event) =>
                setSettings({ ...settings, seed: event.currentTarget.value })
              }
            />
          </label>
          {controls.map((control) => (
            <label key={control.key} className="grid text-body-sm">
              <span className="flex justify-between gap-2">
                {control.label}
                <span
                  aria-hidden="true"
                  className="font-mono text-content-muted"
                >
                  {numberFormat.format(settings[control.key])}
                  {"suffix" in control ? control.suffix : ""}
                </span>
              </span>
              <input
                className="h-6 w-full accent-accent"
                type="range"
                min={control.min}
                max={control.max}
                step={control.step}
                value={settings[control.key]}
                aria-valuetext={
                  numberFormat.format(settings[control.key]) +
                  ("suffix" in control ? control.suffix : "")
                }
                onChange={(event) =>
                  setSettings({
                    ...settings,
                    [control.key]: event.currentTarget.valueAsNumber,
                  })
                }
              />
            </label>
          ))}
          <button
            type="button"
            className={secondaryAction}
            onClick={() => {
              setSettings(defaultSettings);
              setShowSafeArea(false);
              setStatus("Parâmetros padrão restaurados.");
            }}
          >
            Restaurar padrão
          </button>
        </div>
      </fieldset>
    </div>
  );
}
