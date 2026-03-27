import { useState, useEffect } from 'react';
import { TreeList } from '../components/organisms/TreeList';
import { Header } from '../components/molecules/Header';

export const MyTrees = () => {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch user's trees from API
    setLoading(false);
  }, []);

  return (
    <div className="my-trees-page">
      <Header title="My Trees" subtitle="Trees you have planted" />
      <TreeList trees={trees} loading={loading} />
    </div>
  );
};
