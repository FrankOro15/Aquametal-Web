type IsoSealProps = {
  className: string;
  idPrefix: string;
};

export default function IsoSeal({ className, idPrefix }: IsoSealProps) {
  const topArcId = `${idPrefix}-arc-top`;
  const bottomArcId = `${idPrefix}-arc-bottom`;
  const globeClipId = `${idPrefix}-globe-clip`;
  const starId = `${idPrefix}-star`;

  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      role="img"
      aria-label="ISO 9001 Certified Company"
    >
      <defs>
        <path id={topArcId} d="M60 250a190 190 0 0 1 380 0" fill="none" />
        <path id={bottomArcId} d="M60 250a190 190 0 0 0 380 0" fill="none" />
        <clipPath id={globeClipId}>
          <circle cx="250" cy="250" r="138" />
        </clipPath>
        <g id={starId}>
          <polygon
            points="0,-10 2.9,-3 9.5,-3 4.2,1 6.2,7.6 0,3.5 -6.2,7.6 -4.2,1 -9.5,-3 -2.9,-3"
            fill="currentColor"
          />
        </g>
      </defs>

      <circle
        cx="250"
        cy="250"
        r="236"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
      />
      <circle
        cx="250"
        cy="250"
        r="222"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="250"
        cy="250"
        r="148"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle cx="250" cy="250" r="138" fill="#0f172a" />

      <text
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="44"
        fontWeight="bold"
        letterSpacing="4"
      >
        <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
          CERTIFIED
        </textPath>
      </text>
      <text
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="44"
        fontWeight="bold"
        letterSpacing="4"
      >
        <textPath
          href={`#${bottomArcId}`}
          startOffset="50%"
          textAnchor="middle"
        >
          COMPANY
        </textPath>
      </text>

      <use href={`#${starId}`} transform="translate(68 250)" />
      <use href={`#${starId}`} transform="translate(73 212)" />
      <use href={`#${starId}`} transform="translate(87 176)" />
      <use href={`#${starId}`} transform="translate(73 288)" />
      <use href={`#${starId}`} transform="translate(87 324)" />
      <use href={`#${starId}`} transform="translate(432 250)" />
      <use href={`#${starId}`} transform="translate(427 212)" />
      <use href={`#${starId}`} transform="translate(413 176)" />
      <use href={`#${starId}`} transform="translate(427 288)" />
      <use href={`#${starId}`} transform="translate(413 324)" />

      <g
        clipPath={`url(#${globeClipId})`}
        fill="none"
        stroke="#64748b"
        strokeWidth="1.8"
        opacity="0.6"
      >
        <line x1="250" y1="100" x2="250" y2="400" />
        <line x1="100" y1="250" x2="400" y2="250" />
        <ellipse cx="250" cy="250" rx="138" ry="40" />
        <ellipse cx="250" cy="250" rx="138" ry="80" />
        <ellipse cx="250" cy="250" rx="138" ry="115" />
        <ellipse cx="250" cy="250" rx="40" ry="138" />
        <ellipse cx="250" cy="250" rx="80" ry="138" />
        <ellipse cx="250" cy="250" rx="115" ry="138" />
      </g>

      <circle
        cx="250"
        cy="250"
        r="138"
        fill="none"
        stroke="#64748b"
        strokeWidth="2"
      />
      <text
        x="250"
        y="235"
        fill="#ffffff"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="80"
        fontWeight="900"
        textAnchor="middle"
      >
        ISO
      </text>
      <text
        x="250"
        y="312"
        fill="#ffffff"
        fontFamily="Arial Black, Arial, sans-serif"
        fontSize="90"
        fontWeight="900"
        textAnchor="middle"
      >
        9001
      </text>
    </svg>
  );
}
