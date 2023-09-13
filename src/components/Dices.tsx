import React from 'react';

interface DicesProps {
    className?: string;
}


const Dices: React.FC<DicesProps> = (props) => {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.87192"
        y="11.6157"
        width="6.69963"
        height="6.69963"
        transform="rotate(-15 2.87192 11.6157)"
        fill="white"
        stroke="black"
        stroke-width="0.5"
      />
      <rect
        x="11.6048"
        y="1.95498"
        width="6.69963"
        height="6.69963"
        transform="rotate(35.1014 11.6048 1.95498)"
        fill="white"
        stroke="black"
        stroke-width="0.5"
      />
      <circle cx="14.0657" cy="6.10669" r="0.5" fill="black" />
      <circle cx="11.0657" cy="7.10669" r="0.5" fill="black" />
      <circle cx="7.06573" cy="14.1067" r="0.5" fill="black" />
    </svg>
  );
};

export default Dices;
