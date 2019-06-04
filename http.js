class HttpClient{

    //Make as HTTP GET request
    async get(url){
        const response =  await fetch(url);
        const data = await response.json();
        return data;
    }

    //make HTTP POST request
    async post(url, data){
      const response = await fetch(url  , {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // make HTTP PUT request
    async put(url, data){
        const response = await fetch(url  , {
            method: 'PUT',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // make HTTP DELETE request
    async delete(url){
        const response = await fetch(url  , {
            method: 'DELETE',
            headers: {
                'Content-type' : 'application/json'
            },
        });

        const resData = await 'Resource Deleted....';
        return resData;
    }

}