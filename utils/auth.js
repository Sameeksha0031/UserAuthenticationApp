import axios from "axios";

const API_KEY = "AIzaSyD1LlkAv2NL1tRCNAgxlGmDgWypcZzZbDo";

export async function createUser(email, password) {
  // const response = await axios.post(
  //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
  //   {
  //     email: email,
  //     password: password,
  //     returnSecureToken: true,
  //   }
  // );
  //return response;
  await authenticate("signUp", email, password);
}

export function userLogin(email, password) {
  console.log(email + password);
  authenticate("signInWithPassword", email, password);
}

export async function authenticate(mode, email, password) {
  console.log("inside authentication function");
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
}
