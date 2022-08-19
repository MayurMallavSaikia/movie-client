import React, { Suspense } from 'react';
import { Route, Switch} from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetail from "./views/MovieDetail/MovieDetail"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import { Error404 } from './views/Error/Error404';
function App() {
  return (
   <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="reactMovieClient/" component={Auth(LandingPage, null)} />
          <Route exact path="reactMovieClient/login" component={Auth(LoginPage, false)} />
          <Route exact path="reactMovieClient/register" component={Auth(RegisterPage, false)} />
          <Route exact path="reactMovieClient/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="reactMovieClient/favorite" component={Auth(FavoritePage, null)} />
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
