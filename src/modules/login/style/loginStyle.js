/**
 * Login style object
 */

import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../helpers/responsive';
import { Colors } from '../../../helpers/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toolBar: {
    alignItems: 'center',
    width: responsiveWidth(100),
    paddingTop: responsiveWidth(5),
    paddingBottom: responsiveWidth(5),
    marginBottom: responsiveWidth(5),
    borderWidth: 0,
    borderRadius: 0,
    borderColor: '#ddd',
    shadowColor: '#ddd',
    shadowOpacity: 1.0,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: '#b30059',
    color: 'white'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
  loginButton: {
    backgroundColor: Colors.THEME_COLOR,
    width: responsiveWidth(50),
    height: responsiveWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
    marginTop: responsiveWidth(5),
  },
  loginButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8)
  }
})

export default styles;