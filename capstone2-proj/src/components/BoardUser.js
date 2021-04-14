import React, { useState, useEffect } from "react";
import { ThemeProvider } from 'theme-ui';
import { BrowserRouter, Switch } from 'react-router-dom';
import Box from './Box';
import Navbar from './Navbar';
import Router from '../router';
import routes from '../router/config';
import theme from '../theme';
import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      {/* <header className="jumbotron">
        <h3>{content}</h3>
      </header> */}
<ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box>
        <>          
        {/* <Navbar /> */}
          <Switch>
            {routes.map(route => (
              <Router key={route.path} {...route} />
            ))}
          </Switch>
        </>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
    </div>
  );
};

export default BoardUser;