import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import { Container } from "./ContactsPage.styled";
import { FormAddContact } from "components/FormAddContact/FormAddContact";
import { FilterContact } from "components/FilterContact/FilterContact";
import { Loader } from "components/Loader/Loader";
import { BadRequest } from "components/BadRequest/BadRequest";
import { ContactCard } from "components/ContactCard/ContactCard";



const ContactsPage = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Container>
      <FormAddContact />
      <h2>Contacts</h2>
      <FilterContact />
      {isLoading && <Loader />}
      {error && <BadRequest>Something went wrong</BadRequest>}
      <ContactCard />
    </Container>
  )
}

export default ContactsPage;