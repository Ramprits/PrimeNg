// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyD694snSYJsEOWDeyQ5tXIsAAdr9Bur62g",
    authDomain: "angular4application.firebaseapp.com",
    databaseURL: "https://angular4application.firebaseio.com",
    projectId: "angular4application",
    storageBucket: "angular4application.appspot.com",
    messagingSenderId: "593615325561"
  }
};
