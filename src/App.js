import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import Categories from './components/Categories';
import Error from './components/Error';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
);
export default App;
