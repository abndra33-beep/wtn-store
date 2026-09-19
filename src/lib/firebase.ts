import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";
import { getAuth, type Auth } from "firebase/auth";

const env = import.meta.env as Record<string, string | undefined>;

/**
 * Firebase web config (publishable — safe in client code).
 * Every value can be overridden with a Netlify environment variable,
 * so you can point the same build at another Firebase project.
 */
export const firebaseConfig = {
  apiKey: env["VITE_FIREBASE_API_KEY"] ?? "",
  authDomain: env["VITE_FIREBASE_AUTH_DOMAIN"] ?? "wtn-store.firebaseapp.com",
  databaseURL: env["VITE_FIREBASE_DATABASE_URL"] ?? "https://wtn-store-default-rtdb.firebaseio.com",
  projectId: env["VITE_FIREBASE_PROJECT_ID"] ?? "wtn-store",
  storageBucket: env["VITE_FIREBASE_STORAGE_BUCKET"] ?? "wtn-store.firebasestorage.app",
  messagingSenderId: env["VITE_FIREBASE_MESSAGING_SENDER_ID"] ?? "1082993079838",
  appId: env["VITE_FIREBASE_APP_ID"] ?? "1:1082993079838:web:efe131dbaf3425c640e00f",
  measurementId: env["VITE_FIREBASE_MEASUREMENT_ID"] ?? "",
};

export function configureFirebasePublicKeys(config: {
  apiKey?: string;
  measurementId?: string;
}) {
  if (config.apiKey) firebaseConfig.apiKey = config.apiKey;
  if (config.measurementId) firebaseConfig.measurementId = config.measurementId;
}

export const DB_URL = firebaseConfig.databaseURL;

let _app: FirebaseApp | null = null;
export function getFbApp(): FirebaseApp {
  if (!_app) _app = getApps()[0] ?? initializeApp(firebaseConfig);
  return _app;
}
export function getDb(): Database {
  return getDatabase(getFbApp());
}
export function getFbAuth(): Auth {
  return getAuth(getFbApp());
}
