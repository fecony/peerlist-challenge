// SVG definition for the gooey filter
export const GooeyFilter = () => {
  return (
    <svg className="hidden">
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />

        <feColorMatrix
          in="blur"
          mode="matrix"
          values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10"
          result="gooey"
        />
        <feBlend in="SourceGraphic" in2="gooey"></feBlend>
        {/* <feComposite in="SourceGraphic" in2="gooey" operator="atop" /> */}
      </filter>
    </svg>
  );
};
