import React from "react"

const Input = ({ percentage = 70 }) => {
  const radius = 15
  const stroke = 2
  const normalizedRadius = radius - stroke / 2
  const circumference = 2 * Math.PI * normalizedRadius

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference

  return (
    <div className="flex items-center justify-center w-max">
      <svg height={radius * 2} width={radius * 2}>
        
        {/* Background circle */}
        <circle
          stroke="#444"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <circle
          stroke="limegreen"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="10"
        >
          {percentage}%
        </text>

      </svg>
    </div>
  )
}

export default Input