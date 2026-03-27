import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export const BottomTab = ({ tabs, activeTab, onTabChange, className }) => {
  return (
    <div className={`bottom-tab ${className || ''}`}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={activeTab === tab.id ? 'active' : ''}
        >
          {tab.icon && <Icon name={tab.icon} />}
          <span>{tab.label}</span>
        </Button>
      ))}
    </div>
  );
};
