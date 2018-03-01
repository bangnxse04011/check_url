
module.exports = {
    /** 
     * Method create url and api key using virustotal
    */
    method_check_url : (url) => {
        let api_key = "36129368de4ed64827fc3440f53d5e6d972cdc0aa8c0832d292c6b96ffd86974";
        let api_with_url = "https://www.virustotal.com/vtapi/v2/url/report?apikey="+ api_key +"&resource=" + url;
        return api_with_url;
    }
}
