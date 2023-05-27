import { DeleteBtn } from './Contacts.styled';
import { ContactsList, ListItem } from './Contacts.styled';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <p>
            {name} {number}
          </p>
          <DeleteBtn onClick={() => deleteContact(id)} type="button">
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
