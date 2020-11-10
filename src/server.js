const BASE_URL = 'http://localhost:3001';

function request(url, method, body) {
  if (method === 'GET') {
    return fetch(BASE_URL + url)
      .then(x => x.json())
  }
  else {
    return fetch(BASE_URL + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(x => x.json())
  }
}

export function getUsers(keyword) {
  return request('/users?keyword=' + keyword, 'GET')
}

export function deleteUser(userId) {
  return request('/users/' + userId, 'DELETE')
}

export function getUser(userId) {
  return request('/users/' + userId);
}

export function addUser(user) {
  return request('/users/','POST', user)
}

export function updateUser(user) {
  return request('/users/','PUT', user)
}