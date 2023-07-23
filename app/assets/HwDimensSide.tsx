export default function HwDimensSide(props: any) {
  return (
    <svg
      width="268"
      height="121"
      viewBox="0 0 268 121"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>hw-dimens-side</title>
      <g fill="none" fillRule="evenodd">
        <text
          fontFamily="rift-soft, proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="14"
          fontWeight="500"
          letterSpacing="2.333"
          transform="translate(1 -3)"
        >
          <tspan x="49.875" y="14" fill="#222">
            2 in{" "}
          </tspan>{" "}
          <tspan x="81.114" y="14" letterSpacing="1.815" fill="#B8B8B8">
            (50.8mm)
          </tspan>
        </text>
        <text
          fontFamily="rift-soft, proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif"
          fontSize="14"
          fontWeight="500"
          letterSpacing="2.333"
          transform="translate(1 -3)"
        >
          <tspan x="207" y="106" fill="#222">
            0.25in{" "}
          </tspan>{" "}
          <tspan x="207" y="123" fill="#B8B8B8">
            (6.35mm)
          </tspan>
        </text>
        <path stroke="#C4C4C4" d="M1.5 102.5h189v7H1.5z" />
        <path
          stroke="#C4C4C4"
          strokeLinecap="square"
          d="M1 26.747V19h190v8.024"
        />
        <path stroke="#C4C4C4" d="M14.5 80.5h92v22h-92zm113 0h43v22h-43z" />
      </g>
    </svg>
  );
}
