fetch("https://dog.ceo/api/breeds/image/random")
  .then(data => data.json())
  .then((res) => {
    if(res.status !== 'success') {
        return;
    }
    
    document.querySelector('.js-img').innerHTML = `
        <img 
            src='${res.message}'
            width='500'>
    `;
  });
