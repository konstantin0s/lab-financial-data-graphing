const stockInfo  = axios.create({
  baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json'
});


// const stock = "data";

// function getStockInfo(startDate, endDate) {
stockInfo.get(`/chart`)
.then(response => {
  // console.log(response);

  printTheChart(response.data);
    // var key = '';
    // var value = '';
    // for ( [key, value] of Object.entries(response.data.bpi)) {
    //   console.log(key);
    //   $('#stocky').append(`Date: ${key} | Price: ${value} <br>`);
    // }

})
.catch(error => {
  console.log(error);
});


var printTheChart = (stockData => {
  const stockLabels = stockData.map( element => element.date);
  const stockPrice = stockData.map( element => element.close);
  console.log(stockLabels);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockLabels,
      datasets: [{
        label: "Stock Chart",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: stockPrice,
      }]
    }
  });
});