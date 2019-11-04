/**
 * Details Screen Style Object
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
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(5)
  },
  image: {
    width: responsiveWidth(22),
    height: responsiveWidth(22),
    borderRadius: responsiveWidth(11),
  },
  profileInfo: {
    width: responsiveWidth(100),
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: Colors.THEME_COLOR
  },
  name: {
    fontSize: responsiveFontSize(2.0),
    color: Colors.WHITE,
    padding: 8
  },
  email: {
    fontSize: responsiveFontSize(1.5),
    color: Colors.WHITE,
  },
  profileDetailsContainer: {
    width: responsiveWidth(100),
    padding: responsiveWidth(5),
  },
  profileDetailsSingleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveWidth(2)
  },
  profileDetailsItem: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: 'bold',
    color: Colors.DARK_GREY,
  },
  profileDetailsValue: {
    fontSize: responsiveFontSize(1.9),
    color: Colors.DARK_GREY,
  }
})

export default styles;