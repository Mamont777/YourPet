import React from 'react';
import { SVGStyledStroke } from './SVG.styled';

export const User = ({ className }) => {
  return (
    <SVGStyledStroke
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M22 24V22C22 19.7909 20.2091 18 18 18H10C7.79086 18 6 19.7909 6 22V24M18 10C18 12.2091 16.2091 14 14 14C11.7909 14 10 12.2091 10 10C10 7.79086 11.7909 6 14 6C16.2091 6 18 7.79086 18 10Z"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="26.5"
        rx="13.25"
        stroke=""
        strokeWidth="1.5"
      />
    </SVGStyledStroke>
  );
};
