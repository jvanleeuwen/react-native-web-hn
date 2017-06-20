// @flow
type Story = {
  id: number,
  by: string,
  kids: Array<number>,
  score: number,
  time: number,
  title: string,
  type: 'story' | 'comment' | 'poll' | 'job',
  url: string,
};

type Stories = Array<Story>;

type Store = {
  ui?: Object,
  stories?: Object,
};

export type { Story, Stories, Store };
