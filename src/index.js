import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./routes/routes";
import store from "./store/Index";
import { Provider } from 'react-redux';
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppRouter />
          <ToastContainer />
      </Provider>
  </React.StrictMode>
);

