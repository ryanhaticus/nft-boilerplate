import admin from 'firebase-admin';
import { BridgeConfiguration } from '../../nft.config';

export const getFirebaseAdmin = () => {
  if (admin.apps.length > 0) {
    return admin.app();
  }
  admin.initializeApp({
    credential: BridgeConfiguration.usingFirebaseHosting
      ? admin.credential.applicationDefault()
      : admin.credential.cert({
          projectId: process.env.FIREBASE_CREDENTIAL_PROJECT_ID,
          privateKey: process.env.FIREBASE_CREDENTIAL_PRIVATE_KEY,
          clientEmail: process.env.FIREBASE_CREDENTIAL_CLIENT_EMAIL
        })
  });
  return admin.app();
};
