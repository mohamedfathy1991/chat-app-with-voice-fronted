import { createHashRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Layout from './components/Layout/Layout';
import Chat from "./components/pages/Chat";
import Home from "./components/pages/Home";
import Chatprovider from "./context/chatContext";

function App() {
  const routes = createHashRouter([
    {
      path: "/",            // path الأساسي
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/chat", element: <Chat /> }
      ]
    }
  ]);

  return (
    <Chatprovider>
      <div className="app">
        <RouterProvider router={routes} />
      </div>
    </Chatprovider>
  );
}

export default App;
