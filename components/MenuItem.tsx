'use client';

import { useState } from 'react';

interface MenuItemProps {
  id: string;
  iconSrc: string;
  label: string;
  isActive?: boolean;
  onClick?: (id: string) => void;
  submenu?: {
    title: string;
    items: Array<{ id: string; label: string; isActive?: boolean }>;
  };
}

export default function MenuItem({ 
  id, 
  iconSrc, 
  label, 
  isActive = false, 
  onClick,
  submenu 
}: MenuItemProps) {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        w-[67px] h-[61px] p-[7px] cursor-pointer transition-all duration-200 rounded-[15px]
        ${isActive 
          ? 'bg-pertamina-accent shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' 
          : 'hover:bg-gray-700 hover:bg-opacity-60'
        }
      `}
      title={label}
    >
      <div className="w-full h-full flex items-center justify-center">
        <img 
          src={iconSrc}
          alt={label}
          className="w-6 h-6 object-contain"
        />
      </div>
    </div>
  );
}