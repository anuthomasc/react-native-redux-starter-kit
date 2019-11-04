/**
 * Custom input component used in the application login screen 
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/responsive';
import { Colors } from '../../helpers/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './TextFieldStyle';

export default class TextField extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inFocus: false,
      showErrorText: false
    }
  }
  render() {
    const {
      editable,
      labelText,
      onChangeText,
      keyboardType,
      autoCapitalize,
      reference,
      onSubmitEditing,
      maxLength,
      value,
      onPress,
      style,
      placeholder,
      secureTextEntry,
      onFocus,
      onBlur,
      error,
      width,
      numberOfLines,
      validator,
      onClear
    } = this.props;
    const {
      inFocus
    } = this.state;
    return (
      <View style={{}}>
        <View style={[styles.textFieldContainer, {
          width: width ? width : responsiveWidth(90), borderColor: Colors.GREY_10, borderWidth: (inFocus) ? 1.1 : 0.8,
        }]}>
          <View style={[styles.inLineImageLeft, { backgroundColor: error ? Colors.RED_60 : Colors.EMERALD, }]} />
          {/* <View style={{ alignContent: 'center', flex: 1 }}>
            {
              inFocus || value != '' && (
                <Text style={styles.placeholderText}>{placeholder}</Text>
              )
            } */}
          <TextInput
            editable={editable == null ? true : editable}
            style={styles.textField}
            placeholderTextColor={error ? Colors.RED_60 : Colors.GREY_50}
            ref={reference}
            label={labelText}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            keyboardType={keyboardType == null ? 'default' : keyboardType}
            autoCapitalize={autoCapitalize == null ? 'none' : autoCapitalize}
            maxLength={maxLength}
            onSubmitEditing={onSubmitEditing}
            // placeholder={!inFocus ? placeholder : ''}
            placeholder={placeholder}
            onEndEditing={onBlur}
            onBlur={() =>
              this.setState({
                inFocus: false
              })
            }
            numberOfLines={numberOfLines == null ? 1 : numberOfLines}
            onFocus={() => {
              onFocus
              this.setState({ inFocus: true })
            }} />
          {/* </View> */}
          {
            error && (
              <View activeOpacity={0.9} style={styles.errorInfo}>
                <Ionicons name='ios-information-circle' color={Colors.RED_60} size={responsiveWidth(6)} />
              </View>
            )
          }
        </View>
        {
          error && (
            <View style={styles.errorWindow}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )
        }
      </View>
    );
  }
}