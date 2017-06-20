import firebase from 'firebase';

let data;

function getStory(id) {
  return new Promise((resolve, reject) => {
    firebase
      .app()
      .database()
      .ref(`v0/item/${id}/`)
      .once('value')
      .then(function(snapshot) {
        if (snapshot.val() !== null) {
          return resolve(snapshot.val());
        }
      });
  });
}

function run() {
  firebase.initializeApp({
    appName: 'HN Feed',
    databaseURL: 'https://hacker-news.firebaseio.com/',
  });

  const ref = firebase.app().database().ref('v0/topstories');

  ref.on('value', function(snapshot) {
    const stories = snapshot.val().slice(0, 25);

    Promise.all(stories.map(getStory)).then(stories => (data = stories));
  });
}

function getData() {
  return data;
}

export { run, getData };
