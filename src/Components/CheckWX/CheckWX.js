//const clientID = '22b15de00ca343f9a1e8da2f85';
//const redirectURI = 'http://localhost:3000/';

const CheckWX = {
    search (term) {
        return fetch(`https://api.checkwx.com/metar/${term}`,
            {headers: {
                'X-API-Key': "22b15de00ca343f9a1e8da2f85"
            }})
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(!jsonResponse.data) {
                    return [];
                }
                
                return jsonResponse.data
                

            })
    }
}

export default CheckWX