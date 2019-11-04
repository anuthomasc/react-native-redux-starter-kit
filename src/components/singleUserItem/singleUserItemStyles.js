
/**
 * Single user item style object
 */

import {
  StyleSheet,
} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../helpers/responsive';
import { Colors } from '../../helpers/colors';
const styles = StyleSheet.create({
  user: {
    paddingHorizontal: responsiveWidth(5),
    width: responsiveWidth(100),
    flexDirection: 'row',
    alignItems: 'center'
  },
  userProfile: {
    justifyContent: 'center'
  },
  image: {
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: responsiveWidth(8),
  },
  name: {
    color: Colors.BLACK,
    fontSize: responsiveFontSize(2.0),
    paddingLeft: responsiveWidth(4),
  },
  email: {
    color: Colors.DARK_GREY,
    fontSize: responsiveFontSize(1.8),
    paddingLeft: responsiveWidth(4),
  },
})

export default styles;