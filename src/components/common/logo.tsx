import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 32, 
  className = '', 
  showText = false 
}) => {
  return (
    <div 
      className={`logo-wrapper ${className}`} 
      style={{ display: 'inline-flex', alignItems: 'center', gap: `${size * 0.25}px` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Isotipo S estilizado con código <> */}
        <path
          d="M32 28L18 50L32 72"
          stroke="var(--accent-magenta, #e11d68)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68 28L82 50L68 72"
          stroke="var(--accent-magenta, #e11d68)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M62 36C62 27 54 22 46 22C36 22 34 29 34 35C34 46 66 46 66 65C66 74 58 78 48 78C38 78 32 72 32 63"
          stroke="#FFFFFF"
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>

      {showText && (
        <span 
          style={{ 
            fontWeight: 800, 
            fontSize: `${size * 0.55}px`, 
            letterSpacing: '-0.02em',
            color: 'var(--text-primary, #ffffff)' 
          }}
        >
          senstudio.es
        </span>
      )}
    </div>
  );
};