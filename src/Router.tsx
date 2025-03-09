import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IPYNBHTML from './components/IPYNBHTML/IPYNBHTML'
const router = createBrowserRouter([
  {
    path: '/',
    element: <IPYNBHTML path={ 'public/Probability.html' } />,
    children: [
      {
        path: 'about', // This will match /about
        element: <IPYNBHTML path={ 'public/Probability.html' } />,
      },
      {
        path: 'contact', // This will match /contact
        element: <IPYNBHTML path={ 'public/Probability.html'} />,
      },
      {
        path: '*', // This will match any undefined subroute (e.g., /random)
        element: <IPYNBHTML path={ 'public/Probability.html' } />,
      },
    ],
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export {Router, router};