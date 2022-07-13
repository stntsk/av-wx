//const clientID = '22b15de00ca343f9a1e8da2f85';
//const redirectURI = 'http://localhost:3000/';

const CheckWX = {
    searchMetar (term) {
        return fetch(`https://api.checkwx.com/metar/${term}`,
            {headers: {
                'X-API-Key': "22b15de00ca343f9a1e8da2f85"
            }})
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.results === 0) {
                    return ;
                }
                return jsonResponse.data
            })
    },

    searchTaf (term) {
        return fetch(`https://api.checkwx.com/taf/${term}`,
            {headers: {
                'X-API-Key': "22b15de00ca343f9a1e8da2f85"
            }})
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.results === 0) {
                    return ;
                }
                
                return jsonResponse.data
            })
    },

    searchStation (term) {
        return fetch(`https://api.checkwx.com/station/${term}`,
            {headers: {
                'X-API-Key': "22b15de00ca343f9a1e8da2f85"
            }})
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.results === 0) {
                    return ;
                }                
                return {
                    city: jsonResponse.data[0].city,
                    country: jsonResponse.data[0].country.name,
                    elevation: jsonResponse.data[0].elevation.feet,
                    coordinates: (jsonResponse.data[0].latitude.degrees +' '+ jsonResponse.data[0].longitude.degrees),
                    name: jsonResponse.data[0].name,
                    status: jsonResponse.data[0].status,
                    timezone: jsonResponse.data[0].timezone.gmt,
                    dst: jsonResponse.data[0].timezone.dst
                }
            })
    }
}

export default CheckWX