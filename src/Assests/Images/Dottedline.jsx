const Dottedline = (props) => (
  <svg width={9} height={97}>
    <g fill="none" fillRule="evenodd">
      <circle cx={4.5} cy={4.5} r={4.5} fill="#999" />
      <circle cx={4.5} cy={92.5} r={4.5} fill="#999" />
      <path
        stroke="#999"
        strokeDasharray={7}
        strokeLinecap="square"
        d="M4.5 7v84"
      />
    </g>
  </svg>
);
export default Dottedline;
