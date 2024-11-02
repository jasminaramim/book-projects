import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './ErrorPage/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/Banner/BooksRelated/BookDeatil/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },

      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json') 
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,

        //not the right way   ok???
        
        loader: ()=> fetch('/booksData.json')  // do not load all data or some...
      },
      {
        path: 'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
