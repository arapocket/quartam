import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class HomeScreen extends Component<any, any> {
  state = {

  };

  renderItem = singleData => <ListItem singleData={singleData} />

  render() {
    const { singleData } = this.props;
    console.log(this.props);
    return (

      <View style={{ flex: 1 }}>

        <FlatList
          data={singleData}
          renderItem={this.renderItem}
          keyExtractor={singleData.id}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({ singleData: state.someData });


export default connect(mapStateToProps)(HomeScreen);
