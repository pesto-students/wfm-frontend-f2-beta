import React from "react";
import Hero from "../components/Hero";
// import Title from '../components/Title'

import { Provider } from "react-redux";
import { store } from "../helpers/store";
import { LoginApp } from "../loginapp/LoginApp";

// setup fake backend
import { configureFakeBackend } from "../helpers/fake-backend";
import Banner from "../components/Banner";
configureFakeBackend();

const Login = () => {
  return (
    <>
      <Hero>
        <div className="single-room-info">
          <article className="desc">
            <Banner title="Login" subtitle="And Book your property"></Banner>
          </article>
          <article className="info">
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
