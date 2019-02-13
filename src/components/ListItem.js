import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};


class ListItem extends Component {
  state = {};


  render() {
    const { titleStyle } = styles;
    const { library } = this.props;
    console.log(this.props);
    return (
      <CardSection>
        <Text style={titleStyle}>
          {library.item.title }

        </Text>
      </CardSection>
    );
  }
}


export default connect(null, actions)(ListItem);
