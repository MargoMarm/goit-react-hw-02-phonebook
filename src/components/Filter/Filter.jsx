import { FilterInput, Label } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Name"
        value={value}
        onChange={onChange}
      ></FilterInput>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
