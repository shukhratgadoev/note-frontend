import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <NotesListPage/> },
    { path: "/note/:id/", element: <NotePage/> } 
  ])
  return routes;
}

const AppWrapper = () => {
  return (
    <div className="container dark">
        <div className="app">
        <Header />
          <Router>
            <App />
          </Router>
        </div>
    </div>
  );
};

export default AppWrapper;