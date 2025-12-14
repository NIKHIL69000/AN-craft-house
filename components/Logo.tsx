import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-16 w-auto" }) => (
  <svg 
    viewBox="0 0 200 150" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-labelledby="logoTitle"
    role="img"
  >
    <title id="logoTitle">A&N Craft House Logo</title>
    
    {/* A&N Monogram - Clean Serif Typography */}
    <text 
      x="100" 
      y="85" 
      textAnchor="middle" 
      fontFamily="Georgia, serif" 
      fontWeight="bold" 
      fontSize="72"
      fill="#DC2626"
    >
      A<tspan fill="#FCA5A5" fontSize="58" fontStyle="italic" dx="-2">&</tspan><tspan dx="-2">N</tspan>
    </text>
    
    {/* Brand Name - Clean Sans Serif */}
    <text 
      x="100" 
      y="115" 
      textAnchor="middle" 
      fontFamily="Inter, sans-serif" 
      fontSize="16" 
      fontWeight="900" 
      fill="#A3B18A" 
      letterSpacing="2"
    >
      CRAFT HOUSE
    </text>
    
    {/* Tagline */}
    <text 
      x="100" 
      y="132" 
      textAnchor="middle" 
      fontFamily="Inter, sans-serif" 
      fontSize="9" 
      fill="#6B7280" 
      letterSpacing="0.5"
    >
      Handcrafting aapke liye
    </text>
  </svg>
);
