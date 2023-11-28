const DownArrow = (props) => (
  <svg
    width={14}
    height={9}
    fill="currentColor"
    className="t-all ml-2"
    style={{
      transform: "rotate(-180deg)",
      color: "#999",
    }}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M15 12H-1V-4h16z" />
      <path
        fill="currentColor"
        stroke="#FFF"
        strokeWidth={0.5}
        d="M11.59 8 7 3.42 2.41 8 1 6.59l6-6 6 6z"
      />
    </g>
  </svg>
);
export default DownArrow;
