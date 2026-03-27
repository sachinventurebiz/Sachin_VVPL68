import { useState } from 'react';
import { AuthForm } from '../components/organisms/AuthForm';

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement signup logic
  };

  return (
    <div className="signup-page">
      <AuthForm type="signup" onSubmit={handleSubmit} loading={loading} error={error} />
    </div>
  );
};
