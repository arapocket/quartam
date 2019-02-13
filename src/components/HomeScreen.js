import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class HomeScreen extends Component {
  state = {

  };

  renderItem = singleData => <ListItem singleData={singleData} />

  render() {
    const { someData } = this.props;
    console.log(this.props);
    return (

      <View style={{ flex: 1 }}>

        <FlatList
          data={someData}
          renderItem={this.renderItem}
          keyExtractor={singleData => singleData.id}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({ someData: state.someData });


export default connect(mapStateToProps)(HomeScreen);
