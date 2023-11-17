const AvtaarLogo = () => {
  return (
    <svg width={16} height={16} className="c-inherit" viewBox="0 0 14 14">
      <g fill="none" fillRule="evenodd">
        <circle
          cx={7}
          cy={7}
          r={6.25}
          stroke="currentColor"
          strokeWidth={1.5}
        />
        <path
          fill="currentColor"
          d="M7 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM7 9a4 4 0 0 1 3.995 3.8L11 13H3a4 4 0 0 1 4-4Z"
        />
        <circle cx={7} cy={7} r={7.75} stroke="#FFF" strokeWidth={1.5} />
      </g>
    </svg>
  );
};
export default AvtaarLogo;
