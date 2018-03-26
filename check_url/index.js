var axios = require('axios')
const _url =
    "https://www.virustotal.com/vtapi/v2/url/report?apikey=36129368de4ed64827fc3440f53d5e6d972cdc0aa8c0832d292c6b96ffd86974&resource=https://vnexpress.net/";

var params = {
    url: _url,
    method: 'get'
}
axios(params)
    .then(res => 
        console.log(res.data)
    )
    .catch(error => {
        console.error('$http:ajax:catch', error)
    })