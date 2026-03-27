import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text } from '../components/atoms/Text';
import { Button } from '../components/atoms/Button';
import { Loader } from '../components/atoms/Loader';

export const TreeDetails = () => {
  const { id } = useParams();
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch tree details from API
    setLoading(false);
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="tree-details-page">
      {tree && (
        <>
          <img src={tree.image} alt={tree.name} />
          <Text variant="h1">{tree.name}</Text>
          <Text variant="body">{tree.description}</Text>
          <Button>Plant This Tree</Button>
        </>
      )}
    </div>
  );
};
