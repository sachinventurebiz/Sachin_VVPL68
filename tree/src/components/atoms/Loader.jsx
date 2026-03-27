export const Loader = ({ size = 40, color = 'currentColor', className }) => {
  return (
    <div className={`loader ${className || ''}`} style={{ width: size, height: size }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          border: `3px solid ${color}`,
          borderRadius: '50%',
          borderTop: `3px solid transparent`,
          animation: 'spin 1s linear infinite',
        }}
      />
    </div>
  );
};
