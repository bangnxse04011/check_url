const https = require("https");
const url =
  "https://www.virustotal.com/vtapi/v2/url/report?apikey=36129368de4ed64827fc3440f53d5e6d972cdc0aa8c0832d292c6b96ffd86974&resource=https://vnexpress.net/";
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
});