import { FilterInput, Label } from './Filter.styled';

const Filter = ({value, onChange}) => {
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

export default Filter;
