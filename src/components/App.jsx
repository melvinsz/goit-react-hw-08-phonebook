import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RegisterForm } from './Register/Register';
import { LoginForm } from './Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
