// @flow
import React, { PureComponent } from 'react';
import { ScrollView, Linking } from 'react-native';
import { withRouter } from 'react-router';
import { inject, observer } from 'mobx-react';
import compose from 'lodash.flowright';

import Article from './../components/Article';

type Props = {
  stories: Object,
  history: Object,
};

const enhance = compose(withRouter, inject('stories'), observer);

const List = enhance(
  class extends PureComponent<*, Props, *> {
    constructor(props: Props) {
      super(props);

      (this: any).openLink = this.openLink.bind(this);
      (this: any).openComments = this.openComments.bind(this);
    }

    componentDidMount(): void {
      const { stories } = this.props;
      stories.refresh();
    }

    openLink(url): void {
      Linking.canOpenURL(url).then(supported => {
        return Linking.openURL(url);
      });
    }

    openComments(id): void {
      this.props.history.push(`/${id}`);
    }

    render(): React.Element<*> {
      const { stories } = this.props;

      return (
        <ScrollView
          children={stories.stories.map(story => (
            <Article
              key={story.id}
              openLink={() => this.openLink(story.url)}
              openComments={() => this.openComments(story.id)}
              {...story}
            />
          ))}
        />
      );
    }
  }
);

export default List;
