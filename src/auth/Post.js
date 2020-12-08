import React, { useEffect, useState } from 'react'
import axios from 'axios';

function refreshAccessToken() {
  return new Promise(resolve => {
    axios.post('http://localhost:4000/token', { token: localStorage.getItem('refreshToken') })
      .then(({ data }) => {
        localStorage.setItem('accessToken', data.accessToken)
        resolve();
      })
  })
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessToken();
      originalRequest.headers['authorization'] = 'Bearer ' + localStorage.getItem('accessToken')
      return axios(originalRequest);
    }
    return Promise.reject(error);

  }
)

export default function Post() {

  const [state, setState] = useState({
    autherName: '',
    title: ''
  })

  function getData() {
    axios.get('http://localhost:3000/posts', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(({ data }) => {
        setState({
          title: data[0].title,
          autherName: data[0].autherName,
        })
      })
      // .catch(res => {
      //   if (res.response.status === 401) {
      //     axios.post('http://localhost:4000/token', { token: localStorage.getItem('refreshToken') })
      //       .then(({ data }) => {
      //         localStorage.setItem('accessToken', data.accessToken)
      //         getData();
      //       })
      //   }
      // })

    // fetch('http://localhost:3000/posts',
    //   {
    //     method: 'GET',
    //     headers: {
    //       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    //   })
    //   .then(x => x.json())
    //   .then(([data]) => setState({
    //     title: data.title,
    //     autherName: data.autherName,
    //   }))
    // .catch((e) => {
    //   fetch('http://localhost:4000/token',
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ token: localStorage.getItem('refreshToken') })
    //     }
    //   ).then(x => x.json())
    //     .then(({ accessToken }) => {
    //       localStorage.setItem('accessToken', accessToken)
    //       getData();
    //     })
    // })
  }

  useEffect(
    () => {
      getData();
    },
    []
  )

  function handleRefresh() {
    getData();
  }

  console.log(state);

  return (
    <div>
      <div>Author name: {state.autherName}</div>
      <div>Title: {state.title}</div>
      <button onClick={handleRefresh}>refresh</button>
    </div>
  )
}
