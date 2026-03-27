import { useState, useEffect } from 'react';
import { TreeList } from '../components/organisms/TreeList';
import { SearchBar } from '../components/molecules/SearchBar';
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
      <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <TreeList trees={trees} loading={loading} />
    </div>
  );
};
