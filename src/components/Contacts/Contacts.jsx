import { ContactsList, ListItem, DeleteBtn, Title } from './Contacts.styled';

const Contacts = ({ contacts, deleteContact }) => {
	return (
    <>
      <Title>Contacts</Title>
      <ContactsList>
        {contacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <DeleteBtn onClick={() => deleteContact(id)} type="button">
              Delete
            </DeleteBtn>
          </ListItem>
        ))}
      </ContactsList>
    </>
  );
};

export default Contacts;
