import './App.css';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Week1 from './Pages/week-one';
import Week2 from './Pages/week-two';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Week1 />} />
            <Route path='week-two' element={<Week2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Layout />
    </div>
  );
}

export default App;
