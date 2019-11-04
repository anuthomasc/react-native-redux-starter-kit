/**
 * Presentational Component for the login screen
 */

import React, { Component } from 'react';
import { SafeAreaView, FlatList, View, Text, StatusBar, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import { Strings } from '../../../helpers/strings';
import styles from '../style/loginStyle';
import { Header } from 'react-navigation';
import TextField from '../../../components/textField/TextField';
import { Colors } from '../../../helpers/colors';
import { emailvalidation } from '../../../helpers/validation';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      autovalidate: false,
      errors: {},
    };
  }
  /**
   * Navigation header is set to null
   * => header is disabled / hidden
   */
  static navigationOptions = {
    header: null,
  }

  /**
   * Function to validate the user input
   */
  isValid = () => {
    var letters = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
    var numbers = /^\d+$/;
    var alphaNumeric = /^[a-zA-Z0-9]*$/;
    this.setState({
      email: this.state.email.trim().replace(/\s\s+/g, ' '),
      password: this.state.password.trim().replace(/\s\s+/g, ' '),
    }, () => {
    })
    let errors = {};
    let valid = true;
    if (this.state.email == "") {
      valid = false;
      errors.email = 'Email is required'
    }
    if (this.state.password == "") {
      valid = false;
      errors.password = 'Password is required'
    }
    if (this.state.email != "") {
      if (!emailvalidation(this.state.email)) {
        valid = false;
        errors.email = 'Enter a valid email'
      }
    }
    this.setState({
      errors: errors
    })
    return valid;
  }

  /**
   * User login action handling
   * will let the user in with a valid email and password
   */
  handleLogin() {
    this.setState({
      autovalidate: true
    })
    if (this.isValid()) {
      this.props.actions.saveUserInfo(this.state.email, this.state.password)
      this.props.navigation.navigate('Application')
    }
  }

  render() {
    const { autovalidate } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='transparent'
        />
        <View style={styles.contentContainer}>
          <TextField
            placeholder={'Your email address *'}
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            reference={(input) => {
              this.email = input;
            }}
            keyboardType={'email-address'}
            onSubmitEditing={() => {
              this.password.focus()
            }}
            onBlur={() => {
              if (autovalidate) this.isValid()
            }}
            error={this.state.errors['email']}
          />
          <TextField
            placeholder={'Your password *'}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            reference={(input) => {
              this.password = input;
            }}
            onSubmitEditing={() => {
              this.handleLogin()
            }}
            onBlur={() => {
              if (autovalidate) this.isValid()
            }}
            secureTextEntry={true}
            maxLength={25}
            error={this.state.errors['password']}
          />
          <TouchableOpacity onPress={() => { this.handleLogin() }} style={styles.loginButton} activeOpacity={0.8}>
            <Text style={styles.loginButtonText}>{Strings.LoginScreen.loginButtonText}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
