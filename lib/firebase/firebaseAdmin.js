import * as firebaseAdmin from 'firebase-admin';
const serviceAccount = require('./secrets.json');
// const privateKey = process.env["PRIVATE_KEY"];
// const clientEmail = process.env["CLIENT_EMAIL"];
// const projectId = process.env["PROJECT_ID"];

// if (!privateKey || !clientEmail || !projectId) {
//   console.error(
//     `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
//   );
// }

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://doc-dev-fedca.firebaseio.com',
    projectId: 'contacts-6b99f',
  });
}

export { firebaseAdmin };
