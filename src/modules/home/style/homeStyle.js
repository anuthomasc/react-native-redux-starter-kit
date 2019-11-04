/**
 * Home Screen style object
 */

import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../helpers/responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    paddingRight: responsiveWidth(5)
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  listFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    width: responsiveWidth(100),
    height: responsiveWidth(10)
  },
  userResults: {
    paddingVertical: responsiveWidth(5)
  },
  ItemSeparator: {
    margin: responsiveWidth(5)
  }
})

export default styles;