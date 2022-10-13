import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { Container } from "./ContactsPage.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { BadRequest } from "components/BadRequest/BadRequest";
import { ContactList } from "components/ContactList/ContactList";



const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <BadRequest>Something went wrong</BadRequest>}
      <ContactList />
    </Container>
  )
}

export default ContactsPage;

