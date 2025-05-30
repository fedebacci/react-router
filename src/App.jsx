import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';

export default function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
          <Route element={<DefaultLayout />}>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/posts'} element={<PostsPage />} />
          </Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}