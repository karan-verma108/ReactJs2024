import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';

import './index.css';
import Layout from './Layout';
import { Github, Home, User, Contact } from './components';

import { githubDataLoader } from '../utils/githubDataLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route
        path='help'
        loader={() => {
          throw new Response('Something went wrong', { status: 500 });
        }}
        errorElement={<h1>help page error element</h1>}
      />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route path='github' element={<Github />} loader={githubDataLoader} />
    </Route>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
