import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect} from "react";
import Home from "./component/Home/Home.js";
import SecurityDetails from "./component/Security/SecurityDetails.js";
import Securities from "./component/Security/Securities.js";
import Search from "./component/Security/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import AdminRoute from "./component/Route/AdminRoute.js";
import Profile from "./component/User/Profile.js";

import Dashboard from "./component/Admin/Dashboard.js";
import MySecurities from "./component/MySecurity/MySecurities.js";
import SecurityList from "./component/Admin/SecurityList.js";
import UpdateSecurity from "./component/Security/UpdateSecurity.js";
import NewTrade from './component/Security/NewTrade';
import NotFound from "./component/layout/NotFound/NotFound";


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);


  //  calling useEffect for font so that it load font first
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);





  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}


      <Routes>
        

        <Route exact path="/" element={<Home />} />
        <Route exact path="/security/:id" element={<SecurityDetails />} />
        <Route exact path="/securities" element={<Securities />} />
        <Route path="/securities/:keyword" element={<Securities />} />
        <Route exact path="/search" element={<Search />} />


        {/* when user is logged in then it will access these resources */}
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/account' element={<Profile />} />
          <Route exact path="/update/security/:id" element={<UpdateSecurity />} />
          
           <Route exact path="/my/securities" element={<MySecurities/>} />
          <Route exact path="/create/trade" element={<NewTrade />} />
        </Route>


        {/* when admin is logged in then it will access these resources */}
        <Route exact path='/' element={<AdminRoute />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/securities" element={<SecurityList />} />
          <Route exact path="/admin/users" element={<SecurityList />} />
        </Route>
        

        <Route exact path="/login" element={<LoginSignUp />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
