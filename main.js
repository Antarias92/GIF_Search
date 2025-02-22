async function renderSearch(){
    let apiKey = 'dMC2OFEnh9THjWRT1OjjpLm0klaKAlCW';
    let myInput = document.getElementById("searchInput").value;
    let info = null;

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${myInput}&limit=12`);

    console.log("Completed...");
    document.createElement('img');
    info = await response.json();
    let gif_container = document.getElementById('gif_container');

    for(let i = 0; i < info.data.length; i++){
        let img = `<img src="${info.data[i].images.original.url}">`
        gif_container.innerHTML += img;
        console.log(info.data[i].images.original.url);
    }
}

async function getSyncData(){
    let apiKey = 'dMC2OFEnh9THjWRT1OjjpLm0klaKAlCW';
    let myInput = document.getElementById("txt_city").value;
    let info = null;
    console.log("Requesting Data");
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${myInput}&limit=5`); //make api key a var
   
    console.log("Completed...");
    document.createElement('img');
    info = await response.json();
    let gif_container = document.getElementById('gif_container');
    
    for(let i = 0; i < info.data.length; i++){
        //let img = `<img src="${info.data[i].embed_url}">`
        let img = `<img src="${info.data[i].images.original.url}">`
        gif_container.innerHTML += img;
        console.log(info.data[i].images.original.url);
    }
   
    //document.getElementsByTagName('p')[0].innerHTML = info.temperature;
}       


async function renderCats(){
    let apiKey = 'dMC2OFEnh9THjWRT1OjjpLm0klaKAlCW';
    let info = null;
    console.log("Requesting Data");
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=12`); //make api key a var
   
    document.createElement('img');
    info = await response.json();
    let gif_container = document.getElementById('gif_container');
    
    for(let i = 0; i < info.data.length; i++){
        let img = `<img src="${info.data[i].images.original.url}">`
        gif_container.innerHTML += img;
        console.log(info.data[i].images.original.url);
    }
}       
