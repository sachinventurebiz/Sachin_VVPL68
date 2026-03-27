export const Text = ({ children, className, variant = 'body', ...props }) => {
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    small: 'span',
  };

  const Component = variantMap[variant] || 'p';
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
