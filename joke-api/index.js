const axios = require('axios');

axios.get('https://backend-omega-seven.vercel.app/api/getjoke')
  .then(function (response) {
    // handle success
    //console.log(response.data);
    console.log(`Question: ${response.data[0].question}`);
    console.log(`Punchline: ${response.data[0].punchline}`);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });