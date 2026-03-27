import { Text } from '../atoms/Text';

export const Header = ({ title, subtitle, className }) => {
  return (
    <div className={`header ${className || ''}`}>
      <Text variant="h1">{title}</Text>
      {subtitle && <Text variant="body">{subtitle}</Text>}
    </div>
  );
};
