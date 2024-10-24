import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Define a function to load the service account JSON
function getServiceAccount() {
  const filePath = path.join(process.cwd(), 'src/lib/mexicointeractivo-firebase-adminsdk-yqc76-43cb8b714c.json');
  const serviceAccount = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return serviceAccount;
}

// Initialize Firebase Admin
if (!admin.apps.length) {
  const serviceAccount = getServiceAccount();
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Access Firestore
const db = admin.firestore();

export { db };
