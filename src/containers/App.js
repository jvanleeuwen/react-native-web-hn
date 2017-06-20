// @flow
import React from 'react';
import { View } from 'react-native';
import { Route } from 'react-router';

import List from './../routes/List';
import Detail from './../routes/Detail';

function App(): React.Element<*> {
  return (
    <View accessibilityRole="main">
      <Route exact path="/" component={List} />
      <Route path="/:id" component={Detail} />
    </View>
  );
}

export default App;
