const http = new HttpClient;


// GET Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log('Get Users: ',data))
    .catch(err => console.log(err));

    http.get('https://jsonplaceholder.typicode.com/users/5')
    .then(data => console.log('Get User: ',data))
    .catch(err => console.log(err));

    // User Data
    const data = {
        name: 'Kefas Ogabi',
        username: 'kefasogabi',
        email: 'kefasogabi@gmail.com'
    }

    // CREATE User
    http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log('Post User: ',data))
    .catch(err => console.log(err)); 

    // UPDATE User
    http.get('https://jsonplaceholder.typicode.com/users/4', data)
    .then(data => console.log('Update User: ',data))
    .catch(err => console.log(err));

    // DELETE User
    http.delete('https://jsonplaceholder.typicode.com/users/4')
    .then(data => console.log('Delete User: ',data))
    .catch(err => console.log(err));