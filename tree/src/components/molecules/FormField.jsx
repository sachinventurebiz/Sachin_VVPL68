import { Input } from '../atoms/Input';
import { Text } from '../atoms/Text';

export const FormField = ({
  label,
  error,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={`form-field ${error ? 'error' : ''} ${className || ''}`}>
      {label && <Text variant="small">{label}</Text>}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <Text variant="small" className="error-text">{error}</Text>}
    </div>
  );
};
