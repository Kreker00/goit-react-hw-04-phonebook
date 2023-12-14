import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactListItem
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        </ListItem>
      ))}
    </List>
  );
};
