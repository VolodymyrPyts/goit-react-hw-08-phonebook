import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { Text, Container } from "./ContactCard.styled";
import { Button } from "pages/RegisterPage/RegisterPage.styled";

export const ContactCard = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <Container>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</Button>
        </Container>
    )
}

ContactCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}