// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA83YUSKjPZNx0Sz-9EoTbJa0_1PTf8K5s',
    authDomain: 'postit-4a78d.firebaseapp.com',
    databaseURL: 'https://postit-4a78d.firebaseio.com',
    projectId: 'postit-4a78d',
    storageBucket: 'postit-4a78d.appspot.com',
    messagingSenderId: '961745762745'
  },
  mLab: {
    APIKey: 'xppIWAzjI4jtM6OAqYHrQQuT7-0qOh8L',
    URL: 'https://api.mlab.com/api/1/databases/quicknotes /collections/quicknotes'
  }
};
