import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';


class HomeScreen extends Component {
  state = {

  };

  renderItem = library => <ListItem library={library} />

  render() {
    const { libraries } = this.props;
    console.log(this.props);
    return (

      <View style={{ flex: 1 }}>

        <FlatList
          data={libraries}
          renderItem={this.renderItem}
          keyExtractor={library => library.id}
        />

      </View>
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });


export default connect(mapStateToProps)(HomeScreen);
