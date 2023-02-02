

const Football = {
    search(teams) {
        const url =  `https://v3.football.api-sports.io/fixtures/headtohead?h2h=${teams}`;
        const apiKey = '';
        
        return (
            fetch(url, {
            method: 'GET',
            headers: {
                'x-apisports-key': apiKey,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }

            }).then(response => {
                if (response.ok) {
                    return (response.json())
            }

            throw new Error(response);

            }).then(jsonResponse => {
                
                return (jsonResponse.response).slice(0).reverse().map(data => {
                    return {
                        home: data.teams.home.name,
                        away: data.teams.away.name,
                        homeScore: data.goals.home,
                        awayScore: data.goals.away,
                        homeImg: data.teams.home.logo,
                        awayImg: data.teams.away.logo,
                        date: data.fixture.date

                    }
                })
                    

            }).catch(e => {
                return e 
            })
            )
        }
    
    }    

export default Football;
