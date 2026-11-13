import type { ReactNode } from "react";

const previews = [
  {
    position: "upper-left",
    prominence: "primary",
    label: "Prévia geométrica com círculos e linhas",
    art: (
      <>
        <circle cx="211" cy="79" r="53" fill="#666" />
        <circle cx="211" cy="79" r="65" fill="none" stroke="#757575" />
        <circle cx="211" cy="79" r="76" fill="none" stroke="#414141" />
        <path d="M158 79h106M211 26v106" stroke="#8a8a8a" />
        <rect x="32" y="51" width="75" height="9" rx="2" fill="#a4a4a4" />
        <path d="M32 72h57m-57 9h44" stroke="#777" strokeWidth="2" />
        <rect x="32" y="100" width="35" height="11" rx="3" fill="#4e4e4e" />
      </>
    ),
  },
  {
    position: "upper-right",
    prominence: "secondary",
    label: "Prévia geométrica com triângulos e círculo",
    art: (
      <>
        <path d="M35 112 133 24l71 88z" fill="#535353" />
        <path d="m93 127 89-91 100 91z" fill="#888" />
        <path d="m169 127 55-59 58 59z" fill="#aaa" />
        <circle cx="243" cy="42" r="15" fill="#676767" />
        <path d="M31 139h258" stroke="#646464" />
      </>
    ),
  },
  {
    position: "lower-left",
    prominence: "secondary",
    label: "Prévia geométrica com gráfico de barras",
    art: (
      <>
        <rect x="27" y="32" width="103" height="98" rx="5" fill="#3b3b3b" />
        <path
          d="M45 55h46m-46 11h31m-31 39h42"
          stroke="#818181"
          strokeWidth="3"
        />
        <path
          d="M150 50h144M150 76h144M150 102h144M150 128h144"
          stroke="#535353"
        />
        <path
          d="M164 107h17v21h-17zm27-16h17v37h-17zm27 9h17v28h-17zm27-36h17v64h-17zm27-19h17v83h-17z"
          fill="#878787"
        />
        <path
          d="m165 98 34-20 27 5 54-49"
          fill="none"
          stroke="#c0c0c0"
          strokeWidth="2"
        />
      </>
    ),
  },
  {
    position: "lower-right",
    prominence: "primary",
    label: "Prévia geométrica com arcos sobrepostos",
    art: (
      <>
        <path d="M52 143V83a55 55 0 0 1 110 0v60z" fill="#4d4d4d" />
        <path d="M90 143V85a55 55 0 0 1 110 0v58z" fill="#777" />
        <path d="M128 143V87a55 55 0 0 1 110 0v56z" fill="#a0a0a0" />
        <path
          d="M145 142V87a38 38 0 0 1 76 0v55M157 142V87a26 26 0 0 1 52 0v55"
          fill="none"
          stroke="#555"
        />
        <circle cx="258" cy="49" r="13" fill="#5e5e5e" />
        <path d="M29 143h262" stroke="#686868" />
      </>
    ),
  },
];

const distantWindows = [
  { position: "high-left", art: previews[1].art },
  { position: "high-right", art: previews[0].art },
  { position: "mid-left", art: previews[3].art },
  { position: "mid-right", art: previews[2].art },
  { position: "low-center", art: previews[0].art },
];

export function HeroScene({ children }: { children: ReactNode }) {
  return (
    <main
      aria-labelledby="hero-title"
      className="hero-experiment"
      id="main-content"
      tabIndex={-1}
    >
      {children}
      <div className="distant-windows" aria-hidden="true">
        {distantWindows.map(({ position, art }) => (
          <div className={`distant-window ${position}`} key={position}>
            <div className="window-frame">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <svg
                className="window-art"
                focusable="false"
                viewBox="0 0 320 160"
              >
                {art}
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="project-windows">
        {previews.map(({ position, prominence, label, art }) => (
          <div
            className={`project-window ${position} window-${prominence}`}
            key={position}
          >
            <div
              className="window-frame"
              role="img"
              aria-label={label}
              tabIndex={0}
            >
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <svg
                className="window-art"
                focusable="false"
                viewBox="0 0 320 160"
              >
                {art}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
