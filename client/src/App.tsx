import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import { Box, Flex } from '@chakra-ui/react';
import Search from './pages/Search';
import List from './pages/List';

function App() {
  return (
    <Flex as='div' direction='column' justify='space-between' bg='green.50' height='100%'>
      <Header/>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/wyszukaj' element={<Search />}/>
          <Route path='/lista-baz' element={<List />}/>
          <Route path='/o-projekcie' element={<About />}/>
          <Route path='*' element={<NoMatch />}/>
        </Routes>
      </Box>
      <Footer/>
    </Flex>
  );
}

export default App;
