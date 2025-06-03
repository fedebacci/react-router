import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from "./assets/js/data/pages";

import DefaultLayout from './layouts/DefaultLayout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import PostsPage from './pages/posts/PostsPage';
import CreatePostPage from './pages/posts/CreatePostPage';
import ShowPostPage from './pages/posts/ShowPostPage';
import ModifyPostPage from './pages/posts/ModifyPostPage';

import NotFoundPage from './pages/NotFoundPage';

export default function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path={pages.ABOUT()} element={<AboutPage />} />

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