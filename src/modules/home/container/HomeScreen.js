/**
 * Home screen presentational component
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../actions/index";
import styles from '../style/homeStyle';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../helpers/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SingleUserItem from '../../../components/singleUserItem/SingleUserItem';
import { Colors } from '../../../helpers/colors';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      page: 1,
      peopleList: this.props.home.homeResult.results || []
    };
  }
  /**
   * Navigation header
   * use header: null to remove the header from the screen
   */
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'React Redux Starter Kit',
      headerLeft: (
        <View />
      ),
      headerRight: (
        <TouchableOpacity style={styles.headerRight} onPress={navigation.getParam('logoutUser')}>
          <Ionicons name='ios-exit' size={responsiveWidth(6)} color={Colors.WHITE} />
        </TouchableOpacity>
      )
    };
  };


  /**
   * dispatches the user logout action and navigates the user to
   * the authentication stack
   */
  _logoutUser = () => {
    this.props.actions.logoutUser()
    this.props.navigation.navigate('Authentication')
  }

  componentDidMount() {
    this.props.navigation.setParams({ logoutUser: this._logoutUser });
    this.getPeople()
  }

  /**
   * function to fetch the people list from the API
   * all the pagination functionalities are handled in this function
   */
  getPeople() {
    let { page } = this.state;
    this.setState({
      isLoading: true
    })
    this.props.actions.getPeopleList(page).then(() => {
      if (!this.props.home.error)
        this.setState({
          peopleList: [...this.state.peopleList, ...this.props.home.homeResult.results],
          isLoading: false
        })
      else
        this.setState({
          isLoading: false
        })
    })
  }

  /**
   * Pull to refresh functionality implementation
   */
  _onRefresh() {
    this.setState({
      refreshing: true
    })
    this.props.actions.getPeopleList(1).then(() => {
      this.setState({
        peopleList: this.props.home.homeResult.results,
        refreshing: false
      })
    });
  }

  render() {
    let { isLoading, peopleList, page } = this.state;
    let { error } = this.props.home;
    if (isLoading && page == 1) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle='light-content'
            backgroundColor={Colors.THEME_COLOR}
          />
          <View style={[styles.contentContainer, { justifyContent: 'center', alignItems: 'center' }]}>
            <ActivityIndicator color={Colors.THEME_COLOR} size='large' />
          </View>
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Colors.THEME_COLOR}
        />
        <View style={styles.contentContainer}>
          <FlatList
            ref={(ref) => { this.flatListRef = ref; }}
            data={peopleList}
            removeClippedSubviews={true}
            refreshing={this.state.refreshing}
            onRefresh={() => this._onRefresh()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.userResults}
            renderItem={({ item, index }) => {
              return (
                <SingleUserItem
                 onPress={() => { this.props.navigation.navigate('DetailsScreen', { user: item }) }}
                  itemIndex={index}
                  imageURL={item.picture.medium}
                  firstName={item.name.first}
                  lastName={item.name.last}
                  email={item.email}
                />
              )
            }}
            ItemSeparatorComponent={() => (
              <View style={styles.ItemSeparator} />
            )}
            ListFooterComponent={() => {
              return (
                <View style={styles.listFooter}>
                  {
                    isLoading ?
                      <ActivityIndicator size="large" color={Colors.THEME_COLOR} />
                      : null
                  }
                </View>
              )
            }}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
              this.setState({
                page: this.state.page + 1
              }, () => {
                this.getPeople(this.state.page)
              })
            }}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
