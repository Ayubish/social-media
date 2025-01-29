import axios from "axios";

axios.defaults.withCredentials = true;

export async function registerUser(userData) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
}; 
}




export async function loginUser(userData) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signin`, userData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export async function getPosts(){
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts`);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
}

export async function createPost(content) {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/create`, content);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export async function findUser(username){
  try{
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/find`, (username));
    return res.data
  } catch(error) {
    return error.response.data;
  }

}