import { TreeCard } from '../molecules/TreeCard';
import { Loader } from '../atoms/Loader';

export const TreeList = ({ trees, loading, onViewTree, onEditTree, className }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`tree-list ${className || ''}`}>
      {trees.map((tree) => (
        <TreeCard
          key={tree.id}
          tree={tree}
          onView={onViewTree}
          onEdit={onEditTree}
        />
      ))}
    </div>
  );
};
