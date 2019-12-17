console.log('Client side javascript file is loaded!');

fetch('http://localhost:3000/weather?address=marina%20del%20rey').then(
  response => {
    response.json().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  }
);
