import { Routes, Route } from 'react-router-dom';
import Form from './components/phonebook/Form';
import AddPhoneList from './components/phonebook/PhoneList';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import LoginView from './components/views/LoginView';
import RegisterView from './components/views/RegisterView';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivareRoute';
import PublicRoute from './PublicRoute';

export default function App() {
  return (
    <>

      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/homepage"
            element={
              <PublicRoute>
                <HomePage />
                </PublicRoute>
            } />

          <Route
            path="/phonebook"
            element={
              <PrivateRoute>
                <Form />
                <AddPhoneList />
                </PrivateRoute>}
              />

          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={5000} />
  </>
  );
}
