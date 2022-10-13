
import { ContactCard } from "components/ContactCard/ContactCard";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/contacts/selectors";
import { List, ListItem } from "./ContactList.styled";

export const ContactList = () => {

    return (
        <List>
            {useSelector(selectFilteredContacts).map(({ id, name, number })=>(
            <ListItem key={id}>
                <ContactCard id={id} name={name} number={number}/>
            </ListItem>
            ))}
        </List>
    )

}

