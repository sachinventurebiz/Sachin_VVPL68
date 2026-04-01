import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const TreeCard = ({ tree, onView, onEdit, className }) => {
  return (
    <div
      className={`tree-card ${className || ''}`}
      style={{
        backgroundColor: '#09fe6b',
        border: '1px solid #2E8B57',
        borderRadius: '12px',
        padding: '16px',
        boxShadow: '0 8px 20px rgba(46, 139, 87, 0.12)',
      }}
    >
      <img src={tree.image} alt={tree.name} />
      <Text variant="h3" style={{ color: '#155d3c' }}>{tree.name}</Text>
      <Text variant="body" style={{ color: '#16693f' }}>{tree.species}</Text>
      <div className="tree-card-actions">
        <Button onClick={() => onView?.(tree)}>View</Button>
        <Button onClick={() => onEdit?.(tree)}>Edit</Button>
      </div>
    </div>
  );
};
