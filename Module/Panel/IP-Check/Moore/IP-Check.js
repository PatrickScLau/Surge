let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
    let region = jsonData.regionName
  body = {
    title: "Route Info",
    content: `IP:\xa0${ip}\xa0✪\xa0${isp}\nLocation:\xa0${city},\xa0${region},\xa0${country}${emoji}`,
    icon: "link.circle"
  }
  $done(body);
});

 function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
