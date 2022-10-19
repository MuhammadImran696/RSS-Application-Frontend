import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {getAllUrls} from './services/api'

import Home from './pages/Home';
import Items from './pages/Items';

const App = () => {
  const [urls, setUrls] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);

  useEffect(() =>{
    const fetchData = async () => {
      try {
        const data = await getAllUrls()
        setUrls(data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              urls={urls}
              setUrls={setUrls}
              selectedUrls={selectedUrls}
              setSelectedUrls={setSelectedUrls}
            />
          }
        />
        <Route path='/items' element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
