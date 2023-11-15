const Arrow = () => {
  return (
    <svg
      width={6}
      height={10}
      fill="none"
      className="p-absolute"
      style={{
        right: 3,
        top: "38%",
      }}
    >
      <path
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
};

export default Arrow;
