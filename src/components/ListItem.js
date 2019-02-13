import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
  state = {};

  render() {
    return (
      <CardSection>
        <Text>{this.props.singleData.title}</Text>
      </CardSection>
    );
  }
}


export default ListItem;
