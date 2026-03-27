import { useState, useEffect } from 'react';
import { Text } from '../components/atoms/Text';
import { Button } from '../components/atoms/Button';

export const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch user profile from API
    setLoading(false);
  }, []);

  return (
    <div className="profile-page">
      {user && (
        <>
          <Text variant="h1">{user.name}</Text>
          <Text variant="body">{user.email}</Text>
          <Button>Edit Profile</Button>
        </>
      )}
    </div>
  );
};
