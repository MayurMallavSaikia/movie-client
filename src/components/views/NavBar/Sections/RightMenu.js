/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../../../../_actions/user_actions';


function RightMenu(props) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    let dataToSubmit = {
      userId:localStorage.getItem('userId')
    };
   dispatch(logoutUser(dataToSubmit))
   .then(response => {
    if (response.payload.success) {
       localStorage.clear()
      props.history.push("/login");
    } else {
      alert("Logout unsuccessful !")
    }
  })

  //   localStorage.clear()
  //  window.location.href = "/login";
  };

  if (localStorage.getItem('userId')===null) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="https://mayurmallavsaikia.github.io/movie-client/#/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="https://mayurmallavsaikia.github.io/movie-client/#/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item>
        <a href="https://MayurMallavSaikia.github.io/movie-client/#/">Hi, {localStorage.getItem('name')}</a>
        </Menu.Item>
         
       <Menu.Item key="logout">
           <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

