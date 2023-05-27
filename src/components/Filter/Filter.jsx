const { FilterInput } = require('./Filter.styled');

const Filter = ({value, onChange}) => {
  return (
    <label>
      Find contacts by name
      <FilterInput type="text" name="filter" value={value} onChange={onChange}></FilterInput>
    </label>
  );
};

export default Filter;
