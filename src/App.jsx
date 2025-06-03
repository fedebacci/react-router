import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from "./assets/js/data/pages";

import DefaultLayout from './layouts/DefaultLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import CreatePostPage from './pages/CreatePostPage';
import ShowPostPage from './pages/ShowPostPage';
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

            {/* <Route path='/posts'> */}
            <Route path={pages.POSTS()}>
              <Route index element={<PostsPage />} />
              <Route path={pages.CREATEPOST()} element={<CreatePostPage />} />
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