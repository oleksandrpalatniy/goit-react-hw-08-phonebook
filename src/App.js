import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Form from './components/phonebook/Form';
import AddPhoneList from './components/phonebook/PhoneList';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import LoginView from './components/views/LoginView';
import RegisterView from './components/views/RegisterView';
import { Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  useCurrentUserMutation,
  getToken,
  getIsRefreshing,
} from './redux/auth/';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function App() {
  const [currentUser] = useCurrentUserMutation();
  const isRefreshing = useSelector(getIsRefreshing);
  const token = useSelector(getToken);

  useEffect(() => {
    token && currentUser();
  }, [token, currentUser]);

  return (
    <>
      {isRefreshing ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/homepage"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/phonebook"
                element={
                  <PrivateRoute>
                    <Form />
                    <AddPhoneList />
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <PublicRoute restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />
            </Routes>
          </Suspense>
          <ToastContainer autoClose={5000} />
        </>
      )}
    </>
  );
}
