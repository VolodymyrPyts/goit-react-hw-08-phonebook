
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { userGetCurrent } from "redux/auth/operation";
import { selectIsRefreshing } from "redux/auth/selectors";
import { Loader } from "./Loader/Loader";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


const HomePage = lazy(()=>import("pages/HomePage/HomePage"));
const LoginPage = lazy(()=>import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(()=>import("pages/RegisterPage/RegisterPage"));
const ContactsPage = lazy(()=>import("pages/ContactsPage/ContactsPage"));


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userGetCurrent())
  }, [dispatch]);

  
  return useSelector(selectIsRefreshing)
    ? <Loader />
    : (<Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index
          element={<PublicRoute redirectTo="/contacts"
            component={<HomePage />} />
          } />
        <Route path="/login"
          element={<PublicRoute redirectTo="/contacts"
            component={<LoginPage />} />
          } />
        <Route path="/register"
          element={<PublicRoute redirectTo="/contacts"
            component={<RegisterPage />} />
          } />
        <Route path="/contacts"
          element={<PrivateRoute redirectTo="/login"
            component={<ContactsPage />} />
        } />
      </Route>
    </Routes>
  )
}


