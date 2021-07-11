import client from './client'

// const login = (email, password) => client.post('/auth', {email, password});

const login = (email, password)=> {
    const obj = {
        "ok": true,
        "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJ0aGFyYW5nYSIsImVtYWlsIjoidGhhcmFuZ2FtYWhhdmlsYUBnbWFpbC5jb20iLCJpYXQiOjE1MTYyMzkwMjJ9.DnOYBfgSprfwxCJX1thfK0ovZFUsMh6IZYyG0oidHzs"
    }
    return obj;
}

export default {
    login
}