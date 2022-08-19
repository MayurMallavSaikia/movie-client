import React, { Suspense } from 'react';
import { Route, Switch} from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetail from "./views/MovieDetail/MovieDetail"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import LoginPage from './views/LoginPage/LoginPage';
import Error404 from './views/Error/Error404';
function App() {
  return (
   <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route path="/reactMovieClient" component={LandingPage} />
          <Route path="/reactMovieClient/login" component={LoginPage} />
          <Route exact path="/reactMovieClient/register" component={RegisterPage} />
          <Route exact path="/reactMovieClient/movie/:movieId" component={MovieDetail} />
          <Route exact path="/reactMovieClient/favorite" component={FavoritePage} />
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
