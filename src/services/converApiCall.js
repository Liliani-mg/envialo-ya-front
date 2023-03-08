const apiKey = import.meta.env.API_CONVERT_KEY
var myHeaders = new Headers();
myHeaders.append("apikey", "maw683MbsLJqBCMpAIdddOD56GMaWHzv");


var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export function getChange(to, from, amount){
  fetch(`https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(JSON.parse(result)))
  .catch(error => console.log('error', error));
}
