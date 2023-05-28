import { Component } from 'react';
import { Input, AddButton, Form, Title } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  addContact = e => {
    e.preventDefault();
    this.props.creatContact(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact}>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <AddButton type="submit">Add contacts</AddButton>
        </Form>
      </>
    );
  }
}


export default ContactForm;
