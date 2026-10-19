/**
 * Hero architecture diagram.
 *
 * An illustrative system map — a client application, a backend API service, a
 * database and an AI/ML component — drawn as a single scalable SVG so it stays
 * aligned and overflow-free at every viewport. It is schematic and deliberately
 * generic; it is not a representation of a deployed system.
 */

const diagramTitle = "Illustrative software architecture";
const diagramDescription =
  "A schematic diagram: a client application connects over HTTPS to a backend API service, which in turn connects to a database and to an AI/ML inference component.";

/** Minimal line-art glyphs, kept in a 20x20 box and drawn with currentColor. */
function ClientGlyph() {
  return (
    <>
      <rect x="1.5" y="2.5" width="17" height="11.5" rx="2" />
      <path d="M7 18.5h6M10 14v4.5" />
    </>
  );
}

function ApiGlyph() {
  return (
    <>
      <rect x="2.5" y="2.5" width="15" height="6" rx="1.5" />
      <rect x="2.5" y="11.5" width="15" height="6" rx="1.5" />
      <path d="M6 5.5h.01M6 14.5h.01" />
    </>
  );
}

function DatabaseGlyph() {
  return (
    <>
      <ellipse cx="10" cy="5.5" rx="7" ry="3" />
      <path d="M3 5.5v9c0 1.66 3.13 3 7 3s7-1.34 7-3v-9" />
      <path d="M3 10c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </>
  );
}

function AiGlyph() {
  return (
    <>
      <circle cx="4.5" cy="6" r="1.7" />
      <circle cx="4.5" cy="14" r="1.7" />
      <circle cx="15.5" cy="10" r="1.7" />
      <path d="M6.1 6.9 13.9 9.2M6.1 13.1 13.9 10.8" />
    </>
  );
}

interface DiagramNode {
  label: string;
  detail: string;
  glyph: () => React.JSX.Element;
  x: number;
  y: number;
  width: number;
  tone: "cyan" | "violet";
}

const nodes: readonly DiagramNode[] = [
  {
    label: "CLIENT",
    detail: "web · mobile",
    glyph: ClientGlyph,
    x: 120,
    y: 8,
    width: 120,
    tone: "cyan",
  },
  {
    label: "API SERVICE",
    detail: "routes · auth",
    glyph: ApiGlyph,
    x: 110,
    y: 94,
    width: 140,
    tone: "violet",
  },
  {
    label: "DATABASE",
    detail: "records",
    glyph: DatabaseGlyph,
    x: 8,
    y: 190,
    width: 120,
    tone: "cyan",
  },
  {
    label: "AI / ML",
    detail: "inference",
    glyph: AiGlyph,
    x: 232,
    y: 190,
    width: 120,
    tone: "violet",
  },
];

export function HeroVisual() {
  return (
    <figure className="mx-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]">
      <svg
        viewBox="0 0 360 252"
        role="img"
        aria-labelledby="hero-diagram-title hero-diagram-desc"
        className="block h-auto w-full"
      >
        <title id="hero-diagram-title">{diagramTitle}</title>
        <desc id="hero-diagram-desc">{diagramDescription}</desc>

        {/* Connectors: static line plus an overlaid animated dash for flow. */}
        <g
          fill="none"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="4 5"
        >
          <g className="hero-diagram-edge">
            <path d="M180 54V94" />
            <path d="M140 142 68 190" />
            <path d="M220 142 292 190" />
          </g>
          <g className="hero-diagram-flow">
            <path d="M180 54V94" />
            <path d="M140 142 68 190" />
            <path d="M220 142 292 190" />
          </g>
        </g>

        {/* Edge labels. */}
        <g className="hero-diagram-edge-label">
          <text x="180" y="80" textAnchor="middle">
            HTTPS
          </text>
          <text x="96" y="172" textAnchor="end">
            SQL
          </text>
          <text x="292" y="172" textAnchor="middle">
            infer
          </text>
        </g>

        {/* Nodes. */}
        {nodes.map(({ label, detail, glyph: Glyph, x, y, width, tone }) => {
          const height = 46;
          return (
            <g key={label} className={`hero-diagram-node hero-diagram-node--${tone}`}>
              <rect x={x} y={y} width={width} height={height} rx={8} />
              <g
                transform={`translate(${x + 16} ${y + height / 2 - 10})`}
                className="hero-diagram-glyph"
              >
                <Glyph />
              </g>
              <text
                x={x + 48}
                y={y + 19}
                className="hero-diagram-node-label"
              >
                {label}
              </text>
              <text
                x={x + 48}
                y={y + 34}
                className="hero-diagram-node-detail"
              >
                {detail}
              </text>
            </g>
          );
        })}
      </svg>

      <figcaption className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Illustrative · not a deployed architecture
      </figcaption>
    </figure>
  );
}
