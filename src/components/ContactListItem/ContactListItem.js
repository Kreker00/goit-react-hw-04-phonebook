import { ListItem, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <ListItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
    </ListItem>
  );
};
