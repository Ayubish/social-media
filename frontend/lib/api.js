const BASE_URL = 'http://192.168.137.1:5000/api';

export async function registerUser(userData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(userData),
  });
  return response.json();
};
export async function loginUser(userData) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(userData),
  });
  return response.json();
};

