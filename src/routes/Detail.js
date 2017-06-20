// @flow
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import compose from 'lodash.flowright';

type Props = {
  stories: Object,
  history: Object,
};

const enhance = compose(withRouter, inject('stories'), observer);

const Detail = enhance(
  class extends PureComponent<*, Props, *> {
    render(): React.Element<*> {
      const { history } = this.props;

      return (
        <View accessibilityRole="main">
          <TouchableOpacity onPress={history.goBack}>
            <Text>← Terug</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
);

export default Detail;
