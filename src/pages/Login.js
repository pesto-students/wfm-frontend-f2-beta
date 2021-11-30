import React from "react";
import Hero from "../components/Hero";
// import Title from '../components/Title'

import { Provider } from "react-redux";
import { store } from "../helpers/store";
import { LoginApp } from "../loginapp/LoginApp";

// setup fake backend
import { configureFakeBackend } from "../helpers/fake-backend";
import LoginNavBar from "../logincomponents/LoginNavBar";

configureFakeBackend();

const Login = () => {
  return (
    <>
    <LoginNavBar/>
      <Hero>
        <div className="social">
          {/* <article className="social-centre"> */}
            {/* This component is used to navigate to login page */}
          {/* </article> */}
          <article >
            <Provider store={store}>
              <LoginApp />
            </Provider>
          </article>
        </div>
      </Hero>
    </>
  );
};

export default Login;
