import { useState } from 'react';
import { AuthForm } from '../components/organisms/AuthForm';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <div className="login-page">
      <AuthForm type="login" onSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
};
