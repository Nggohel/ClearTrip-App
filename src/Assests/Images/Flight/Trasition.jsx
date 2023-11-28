const Trasition = (props) => (
  <svg width={32} height={32} fill="none" className="c-pointer">
    <rect width={32} height={32} fill="#fff" rx={16} />
    <g
      stroke="#36C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      clipPath="url(#a)"
    >
      <path d="M24.167 14.833H7.833M7.833 14.833 13.667 9M7.833 18.334h16.334M24.167 18.333l-5.834 5.834" />
      <circle cx={16} cy={16} r={13.375} />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M2 2h28v28H2z" />
      </clipPath>
    </defs>
  </svg>
);
export default Trasition;
