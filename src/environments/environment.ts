// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCsX04guZUh64GqRU6kszZN33h9wYEoIJQ',
    authDomain: 'ng-fitness-tracker-36a67.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-36a67.firebaseio.com',
    projectId: 'ng-fitness-tracker-36a67',
    storageBucket: 'ng-fitness-tracker-36a67.appspot.com',
    messagingSenderId: '529191504714'
  }
};
