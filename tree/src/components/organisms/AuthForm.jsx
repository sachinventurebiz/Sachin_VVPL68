import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

export const AuthForm = ({
  type = 'login',
  onSubmit,
  loading,
  error,
  className,
}) => {
  const isLogin = type === 'login';

  return (
    <form onSubmit={onSubmit} className={`auth-form ${className || ''}`}>
      <Text variant="h2">{isLogin ? 'Login' : 'Sign Up'}</Text>
      
      {error && <Text className="error">{error}</Text>}
      
      <FormField label="Email" type="email" placeholder="Enter your email" />
      <FormField label="Password" type="password" placeholder="Enter your password" />
      
      {!isLogin && (
        <FormField label="Confirm Password" type="password" placeholder="Confirm your password" />
      )}
      
      <Button type="submit" disabled={loading}>
        {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
      </Button>
    </form>
  );
};
