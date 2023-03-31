import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'components/Home';
import Categories from './components/Categories';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Route>
  </Routes>
);
export default App;
