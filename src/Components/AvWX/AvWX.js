//const clientID = '22b15de00ca343f9a1e8da2f85';
//const redirectURI = 'http://localhost:3000/';

const AvWX = {
    searchMetar (term) {
        return fetch(`https://avwx.rest/api/metar/${term}`,
            {headers: {
                'Authorization': 'BEARER tEc221d39yxtWht8AibLt5EnUF8JeddqbOoOdyQEWyE'
            }})
            .then(response => { 
                if(response.status === 204 || response.status === 400) {
                    return ;
                }
                return response.json();
            }).then(jsonResponse => {
                if(!jsonResponse) {
                    return 'Request failed';
                }
                return jsonResponse.raw
            })
    },

    searchTaf (term) {
        return fetch(`https://avwx.rest/api/taf/${term}`,
            {headers: {
                'Authorization': 'BEARER tEc221d39yxtWht8AibLt5EnUF8JeddqbOoOdyQEWyE'
            }})
            .then(response => {
                if(response.status === 204 || response.status === 400) {
                    return ;
                }
                return response.json();
            }).then(jsonResponse => {
                if(!jsonResponse) {
                    return 'Request failed';
                }
                return jsonResponse.raw
            })
    },

    searchStation (term) {
        return fetch(`https://avwx.rest/api/station/${term}`,
            {headers: {
                'Authorization': 'BEARER tEc221d39yxtWht8AibLt5EnUF8JeddqbOoOdyQEWyE'
            }})
            .then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(!jsonResponse) {
                    return ;
                }               
                return {
                    city: jsonResponse.city,
                    country: jsonResponse.country,
                    elevation: jsonResponse.elevation_ft,
                    coordinates: (jsonResponse.latitude +' '+ jsonResponse.longitude),
                    name: jsonResponse.name,
                    runways: jsonResponse.runways.map(runway => ({
                        length_ft: runway.length_ft,
                        ident: runway.ident1 + '/' + runway.ident2,
                    })),
                    wikipedia: jsonResponse.wiki,

                }
            })
    }
}

export default AvWX;