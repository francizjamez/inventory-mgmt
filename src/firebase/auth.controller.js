import firebase from "./firebase.config";

export async function logInWithEmail(email, password) {
  return await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log(user.email);
      return { email: user.email };
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      throw error;
    });
}

export async function signUpWithEmail(email, password) {
  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      // Signed in
      var user = userCredential.user;
      //   firestoreRef.collection("users").add({ email: email });
      return user;
      // ...
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;

      throw error;
      // ..
    });
}
