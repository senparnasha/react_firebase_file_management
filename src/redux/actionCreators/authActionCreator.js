import * as types from "./actionsTypes/authActionTypes";
import fire from "../../config/firebase";

const loginUser = (payload) => {
  return {
    // type: types.LOGIN_USER,
    type: types.SIGN_IN,
    payload,
  };
};
const logoutUser = () => {
  return {
    // type: types.SIGN_OUT_USER,
    type: types.SIGN_OUT,
  };
};

export const signInUser = (email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(
        loginUser({
          uid: user.user.uid,
          email: user.user.email,
          displayName: user.user.displayName,
        })
      );
      setSuccess(true);
    })
    .catch((error) => {
      alert("Invalid Email or Password");
    });
};

export const signUpUser = (name, email, password, setSuccess) => (dispatch) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      fire
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          const currentUser = fire.auth().currentUser;
          dispatch(
            loginUser({
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
            })
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      if (error.code === "auth/invalid-email") {
        alert("Invalid Email");
      }
      if (error.code === "auth/weak-password") {
        alert("Weak Password");
      }
    });
};

export const SignOutUser = () => (dispatch) => {
  dispatch(logoutUser());
};
