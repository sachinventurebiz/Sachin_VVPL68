export const Icon = ({ size = 24, color = 'currentColor', className, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      className={className}
      {...props}
    >
      {}
    </svg>
  );
};
