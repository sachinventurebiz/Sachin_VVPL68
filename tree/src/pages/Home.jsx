import { useState, useEffect } from 'react';
import { TreeList } from '../components/organisms/TreeList';
import { Header } from '../components/molecules/Header';

export const Home = () => {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // TODO: Fetch trees from API
    setLoading(false);
  }, []);

  return (
    <div className="home-page">
      <Header title="Tree Plantation" subtitle="Discover and plant trees" />
      <TreeList trees={trees} loading={loading} />
    </div>
  );
};
