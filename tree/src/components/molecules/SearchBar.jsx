import { Input } from '../atoms/Input';
import { Icon } from '../atoms/Icon';

export const SearchBar = ({ placeholder, value, onChange, onSearch, className }) => {
  return (
    <div className={`search-bar ${className || ''}`}>
      <Input
        placeholder={placeholder || 'Search...'}
        value={value}
        onChange={onChange}
      />
      <Icon name="search" />
    </div>
  );
};
