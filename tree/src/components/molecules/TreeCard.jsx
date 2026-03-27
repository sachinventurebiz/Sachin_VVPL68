import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const TreeCard = ({ tree, onView, onEdit, className }) => {
  return (
    <div className={`tree-card ${className || ''}`}>
      <img src={tree.image} alt={tree.name} />
      <Text variant="h3">{tree.name}</Text>
      <Text variant="body">{tree.species}</Text>
      <div className="tree-card-actions">
        <Button onClick={() => onView?.(tree)}>View</Button>
        <Button onClick={() => onEdit?.(tree)}>Edit</Button>
      </div>
    </div>
  );
};
