import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from "./assets/js/data/pages";

import DefaultLayout from './layouts/DefaultLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import ModifyPostPage from './pages/ModifyPostPage';
import ShowPostPage from './pages/ShowPostPage';
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

            {/* <Route path='/posts'> */}
            <Route path={pages.POSTS()}>
              {/* <Route path={pages.POSTS()} element={<PostsPage />} /> */}
              <Route index element={<PostsPage />} />
              {/* QUI METTERE CREATE (PRIMA DI ROTTE PARAMERICHE, O CERCA DI USARE CREATE COME PARAMETRO :ID E VA IN 404) */}
              <Route path='create' element={<main><h1>Pagina create</h1></main>} />
              <Route path={pages.SHOWPOST(":id")} element={<ShowPostPage />} />
              <Route path={pages.MODIFYPOST(":id")} element={<ModifyPostPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}