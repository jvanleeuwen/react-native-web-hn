// @flow
import React from 'react';
import { parse } from 'url';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  by: string,
  score: number,
  title: string,
  url: string,
  openLink: Function,
  openComments: Function,
};

const styles = StyleSheet.create({
  article: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  header: {
    fontFamily: 'Droid Serif',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  meta: {
    fontFamily: 'Droid Serif',
    fontSize: 12,
    color: '#ccc',
  },
  link: {
    fontFamily: 'Droid Serif',
    fontSize: 12,
    color: 'blue',
  },
  divider: {
    marginHorizontal: 10,
    color: '#ccc',
  },
});

function Article({
  by,
  title,
  score,
  url,
  openLink,
  openComments,
}: Props): React.Element<*> {
  return (
    <View accessibilityRole="article" style={styles.article}>
      <TouchableOpacity onPress={openComments}>
        <Text accessibilityRole="heading" style={styles.header}>{title}</Text>
      </TouchableOpacity>
      <View accessibilityRole="footer" style={styles.footer}>
        <Text style={styles.meta}>{score} points</Text>
        <Text style={styles.divider}>·</Text>
        <Text style={styles.meta}>{by}</Text>
        <Text style={styles.divider}>·</Text>
        {url &&
          <TouchableOpacity onPress={openLink}>
            <Text style={styles.link}>{parse(url).hostname}</Text>
          </TouchableOpacity>}
      </View>
    </View>
  );
}

export default Article;
