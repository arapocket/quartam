import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {
  state = {};


  render() {
    const { singleData } = this.props;
    return (
      <CardSection>
        <Text>{singleData.item.title }</Text>
      </CardSection>
    );
  }
}


export default ListItem;
