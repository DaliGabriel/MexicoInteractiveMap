import admin from 'firebase-admin';

// Initialize Firebase Admin using environment variable
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_ADMINSDK);
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Access Firestore
const db = admin.firestore();

export { db };
