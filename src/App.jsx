import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from "./assets/js/data/pages";

import DefaultLayout from './layouts/DefaultLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import ModifyPostPage from './pages/ModifyPostPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
          <Route element={<DefaultLayout />}>
            {/* NB: L'ATTRIBUTO INDEX EQUIVALE AL PATH='/' */}
            {/* <Route path={pages.HOME()} element={<HomePage />} /> */}
            <Route index element={<HomePage />} />
            <Route path={pages.ABOUT()} element={<AboutPage />} />
            <Route path={pages.POSTS()} element={<PostsPage />} />
            {/* <Route path={pages.MODIFYPOST()} element={<ModifyPostPage />} /> */}
            <Route path={pages.MODIFYPOST(1)} element={<ModifyPostPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}