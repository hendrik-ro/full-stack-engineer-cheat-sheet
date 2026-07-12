'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLinksProps {
  links: Array<{ name: string; href: string }>;
}

export default function NavLinks({ links }: NavLinksProps) {
  return (
    <div>
      <ButtonCollapse />
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
          >
            <p className="sidebarLink">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

function ButtonCollapse() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
    if (sidebar) {
      if (isSidebarOpen) {
        sidebar.style.width = '50px';
        sidebar.style.overflow = 'hidden';
      } else {
        sidebar.style.width = '200px';
        sidebar.style.overflow = 'auto';
      }
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <button className="buttonRight" onClick={toggleSidebar}>
      {isSidebarOpen ? '<<' : '>>'}
    </button>
  );
}
