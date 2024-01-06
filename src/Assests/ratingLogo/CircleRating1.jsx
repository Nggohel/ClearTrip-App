const CircleRating1 = () => (
  <svg width={48} height={48} className="circular__progress">
    <circle
      cx={24}
      cy={24}
      r={22.5}
      fill="transparent"
      stroke="#000"
      strokeDasharray="150.79644737231007 150.79644737231007"
      strokeWidth={3}
      style={{
        strokeDashoffset: 15.0796,
      }}
      transform="rotate(-90 24 24)"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="1.3s"
        repeatCount={1}
        values="150.79644737231007;15.079644737231007"
      />
    </circle>
    <text
      x="49%"
      y="50%"
      fill="#11A670"
      className="circular__text"
      dy=".36em"
      textAnchor="middle"
    >
      {"4.5"}
    </text>
  </svg>
);
export default CircleRating1;
