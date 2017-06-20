require('babel-register')({
  presets: ['env', 'react'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native': 'react-native-web',
        },
      },
    ],
  ],
});

require('dotenv').config();
require('./server');
