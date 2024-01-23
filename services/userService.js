import axios from "axios";

const baseURL = "http://localhost:3000";

export function signup(data) {
  delete data.confirmPassword;
  const body = {
    ...data,
    username: generateUserName(data.name),
    avatar: "https://i.imgur.com/xmI2QAo.jpg",
    background: "https://i.imgur.com/xmI2QAo.jpg",
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

function generateUserName(name){
    const nameUser = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameUser}-${randomNumber}`
}