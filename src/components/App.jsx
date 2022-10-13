import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { userGetCurrent } from 'redux/auth/operation';
import { Loader } from "./Loader/Loader";

import { Box } from 'components/theme/Box';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactCard } from './ContactCard/ContactCard';
import { FilterContact } from './FilterContact/FilterContact';
import { SharedLoaut } from "./SharedLoaut/SharedLoaut";

import { TitleStyle } from './FormAddContact/FormAddContact.styled';
import { Route, Routes } from 'react-router-dom';


export const App = () => {

  const dispatch = useDispatch();
  useEffect(()=> {
  dispatch(userGetCurrent())
}, [dispatch]);

    return useSelector(selectIsRefreshing)
    ?<Loader/>
    : (<Routes>
      <Route path='/' element={<SharedLoaut />}/>
    </Routes>)
     (
      <>
        <TitleStyle>Phonebook </TitleStyle>
        <Box display="flex" height="100vh" width="100vw">
          <Box mr="80px" pl="20px">
            <Box as="h2" mb="12px">
              Add new contacts
            </Box>
            <FormAddContact />
          </Box>
          <Box pl="20px" width="400px">
            <Box as="h2" mb="12px">
              Contacts
            </Box>
            {isFetching && <Loader />}
            {contacts?.length > 0 ? (<FilterContact />) :
            (<Box> Let`s get started. Please add a new contact</Box>)
            }
            {contacts?.length > 0 && <ContactCard />}
          </Box>
        </Box>
      </>
    );
  }

