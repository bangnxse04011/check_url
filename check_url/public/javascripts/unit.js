
module.exports = {
    /** 
     * Method create url and api key using virustotal
    */
    common_setting_api: (url) => {
        let api_key = "36129368de4ed64827fc3440f53d5e6d972cdc0aa8c0832d292c6b96ffd86974";
        let api_with_url = "https://www.virustotal.com/vtapi/v2/url/report?apikey=" + api_key + "&resource=" + url;
        return api_with_url;
    },
    /**
     * Method detect keyword
     */
    common_keyword_detect_url: () => {
        let list_keyword = ['sex', 'game', 'jav', 'xxx', 'thiendia', 'khieudam', '18+'];
        return list_keyword;
    },
    /**
     * Check URL valid
     */
    common_valid_URL: (str) => {
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if (!regex.test(str)) {
            return false;
        } else {
            return true;
        }
    }
}
