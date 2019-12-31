import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/theme';
import Loading from '../../components/Loading';
import CommonModal from '../../components/CommonModal';
import configureStore from '../../redux/configureStore';
import Task from '../Task';
import styles from './styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Loading />
          <CommonModal />
          <Task />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
