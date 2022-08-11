console.log("ciao");

var myHeaders = new Headers();
myHeaders.append("apikey", "SiKLI0gonNcAI6T1PtUAEp3RkbjY1BTW");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let data;

let buddino = fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=1", requestOptions)
  .then(response => response.text())
  .then(result => data = result)
  .catch(error => console.log('error', error));

console.log(data);
