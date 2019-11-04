/**
 * Splash screen Presentational component.
 * 
 */

import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import SplashScreen from 'react-native-splash-screen'

class splashScreenUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth.authResult.email || undefined
    };
  }


  componentDidMount() {
    /**
     * checks if the user is already logged in or not
     * 
     * Replace with your logic
     */
    if (this.props.auth.authResult.email == undefined)
      this.props.navigation.navigate('Authentication');
    else
      this.props.navigation.navigate('Application');
  }

  componentWillUnmount() {
    SplashScreen.hide();
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(splashScreenUI);
