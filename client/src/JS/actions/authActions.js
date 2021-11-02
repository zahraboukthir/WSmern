import axios from "axios";
import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  AUTH_FAIL,
  SET_LOADING,
  LOGOUT,
  GET_AUTH_USER,
} from "../const";

//GET AUTH USER

export const getAuthUser = () => async (dispatch) => {
  // dont need to dispatch setLoading because the loading is true by default

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/me", config);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data, // { user : {name , lastName , ... }}
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    });
  }
};

//Register User

export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/register", formData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data, // { user : {name , lastName , ... }}
    });
  } catch (error) {
    //response is the error array from the server
    const response = error.response.data;
    // check if the response is an array and alert it
    if (Array.isArray(response)) {
      response.forEach((err) => {
        alert(err.msg);
      });
    }

    dispatch({
      type: AUTH_FAIL,
    });
  }
};

//LOGIN USER
export const login = (formData) => async (dispatch) => {
  //formData = { email , password }
  // dispatch({
  //   type: SET_LOADING,
  // });
  try {
    const res = await axios.post("/api/auth/login", formData);

    // save the token in the localstorage
    localStorage.setItem("token", res.data.token);

    // dispatch the action with a payload
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data, // {token , user  }
    });
  } catch (error) {
    //response is the error array from the server
    const response = error.response.data;
    // check if the response is an array and alert it
    if (Array.isArray(response)) {
      response.forEach((err) => {
        alert(err.msg);
      });
    }

    dispatch({
      type: AUTH_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  //remove the token from the localstorage
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};
