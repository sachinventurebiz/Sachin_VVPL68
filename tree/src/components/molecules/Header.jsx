import React, { useState } from 'react';

const colors = {
  green: '#2E8B57',
  lightGreen: '#E8F7EE',
  greenText: '#157A3B',
  grayText: '#6B7280',
  white: '#66b95e',
  shadow: '0 10px 24px rgba(18, 97, 48, 0.12)',
};

const IconLeaf = ({ size = 16, color = colors.white }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Leaf icon">
    <path
      d="M12 2C11.8 5.8 10.3 9.4 7.3 12.4C4.2 15.5 1.8 17.6 2 21C6.1 20.4 8.6 17.4 11.7 14.3C14.8 11.2 18.2 9.7 22 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 2C16 4.5 14 7.5 13 11C11.1 15.8 11.9 19.5 12 22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconHouse = ({ size = 14, color = '#157A3B' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Home icon">
    <path d="M3 11L12 4L21 11V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V11Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21V13H15V21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBadge = ({ size = 16, color = '#6B7280' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Contributions icon">
    <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 7V13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M9 10H15" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconLogout = ({ size = 18, color = '#6B7280' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-label="Logout icon">
    <path d="M16 17L21 12L16 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12H9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Header = () => {
  const [zoomedElements, setZoomedElements] = useState({});

  const handleZoomStart = (elementId) => {
    setZoomedElements(prev => ({ ...prev, [elementId]: true }));
  };

  const handleZoomEnd = (elementId) => {
    setZoomedElements(prev => ({ ...prev, [elementId]: false }));
  };

  const getZoomStyle = (elementId) => ({
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    transform: zoomedElements[elementId] ? 'scale(0.95)' : 'scale(1)',
  });

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        background: colors.white,
        borderRadius: '16px',
        boxShadow: colors.shadow,
        margin: '12px',
        minHeight: '84px',
        gap: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: colors.green,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(46, 139, 87, .18)',
            overflow: 'hidden',
            ...getZoomStyle('logo'),
          }}
          aria-label="GrowGreen logo"
          onMouseEnter={() => handleZoomStart('logo')}
          onMouseLeave={() => handleZoomEnd('logo')}
          onTouchStart={() => handleZoomStart('logo')}
          onTouchEnd={() => handleZoomEnd('logo')}
        >
          <img
            src="/leaficon.png"
            alt="GrowGreen logo"
            onError={(e) => {
              const img = e.currentTarget
              img.onerror = null
              img.src = '/growgreen-logo.svg'
            }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: colors.greenText }}>GrowGreen</span>
          <span style={{ fontSize: '0.8rem', color: colors.grayText }}>Making Earth Greener</span>
        </div>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '12px' }} aria-label="Main navigation">
        <button
          style={{
            border: 'none',
            borderRadius: '999px',
            backgroundColor: colors.lightGreen,
            color: colors.greenText,
            padding: '8px 16px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: 'inset 0 0 0 1px rgba(21, 122, 59, .15)',
            ...getZoomStyle('home'),
          }}
          onMouseEnter={() => handleZoomStart('home')}
          onMouseLeave={() => handleZoomEnd('home')}
          onTouchStart={() => handleZoomStart('home')}
          onTouchEnd={() => handleZoomEnd('home')}
        >
          <IconHouse />
          Home
        </button>

        <button
          style={{
            border: '1px solid #1ab809',
            borderRadius: '999px',
            backgroundColor: colors.white,
            color: colors.grayText,
            padding: '8px 16px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            ...getZoomStyle('contributions'),
          }}
          onMouseEnter={() => handleZoomStart('contributions')}
          onMouseLeave={() => handleZoomEnd('contributions')}
          onTouchStart={() => handleZoomStart('contributions')}
          onTouchEnd={() => handleZoomEnd('contributions')}
        >
          <IconBadge />
          My Contributions
        </button>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 700, color: '#0F172A' }}>User</div>
          <div style={{ fontSize: '0.78rem', color: colors.grayText }}>Donor Member</div>
        </div>

        <button
          type="button"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            border: '1px solid #3be607',
            backgroundColor: '#fa0f0f',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...getZoomStyle('logout'),
          }}
          aria-label="Logout"
          onMouseEnter={() => handleZoomStart('logout')}
          onMouseLeave={() => handleZoomEnd('logout')}
          onTouchStart={() => handleZoomStart('logout')}
          onTouchEnd={() => handleZoomEnd('logout')}
        >
          <IconLogout />
        </button>

        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#8ce1a0',
            border: '2px solid #49A16D',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#157A3B',
            fontWeight: 700,
            fontSize: '0.9rem',
            ...getZoomStyle('avatar'),
          }}
          aria-label="Profile avatar"
          onMouseEnter={() => handleZoomStart('avatar')}
          onMouseLeave={() => handleZoomEnd('avatar')}
          onTouchStart={() => handleZoomStart('avatar')}
          onTouchEnd={() => handleZoomEnd('avatar')}
        >
          U
        </div>
      </div>
    </header>
  );
};

export { Header };
