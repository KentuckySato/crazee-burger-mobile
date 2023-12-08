// import {
//     addDoc,
//     collection,
//     doc,
//     getDoc,
//     getDocs,
//     query,
//     setDoc,
//     where,
// } from "firebase/firestore"
// import { db } from "./firebase-config"
import {fakeMenu} from '../fakeData/fakeMenu';
import {getFormattedDate} from '../utils/date';
import {UserData} from '../enums/userData';

export const getUser = async (userId: string) => {
  const docRef = doc(db, 'users', userId);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = async (userId: string) => {
  const docRef = doc(db, 'users', userId);

  const newUser: UserData = {
    createdDate: getFormattedDate(),
    username: userId,
    menu: fakeMenu.LARGE,
  };

  await setDoc(docRef, newUser);
  return newUser;
};

export const authenticateUser = async (userId: string) => {
  // 1. Get user by userId
  // 2. If user doesn't exist, create it
  const existingUser = await getUser(userId);

  if (!existingUser) {
    const newUser = await createUser(userId);
    return newUser;
  }

  return existingUser;
};

// TEST
export const createUserWithRandomId = (username: string) => {
  const usersRef = collection(db, 'users');

  const data = {
    createdDate: getFormattedDate(),
    username,
    menu: fakeMenu.MEDIUM,
  };

  addDoc(usersRef, data);
};

// TEST
export const getUserByUsername = async (username: string) => {
  const usersRef = collection(db, 'users');

  const queryUsername = query(usersRef, where('username', '==', username));
  const querySnapshot = await getDocs(queryUsername);

  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots

    if (doc.data().username === username) return {...doc.data(), id: doc.id};
  });
};
