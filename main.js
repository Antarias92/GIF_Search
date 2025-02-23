let apiKey = 'dMC2OFEnh9THjWRT1OjjpLm0klaKAlCW';
let info = null;

/*async function renderSearch(){
    let apiKey = 'dMC2OFEnh9THjWRT1OjjpLm0klaKAlCW';
    let myInput = document.getElementById("searchInput").value;
    let info = null;

    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${myInput}&limit=36`);

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
*/

async function renderSearch(){
    try{
        let myInput = document.getElementById("searchInput").value;
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${myInput}&limit=48`);
       
        document.createElement('img');
        info = await response.json();
        let gif_container = document.getElementById('gif_container');
        gif_container.innerHTML = '';
        
        for(let i = 0; i < info.data.length; i++){
            let img = `<img src="${info.data[i].images.original.url}">`
            gif_container.innerHTML += img;
            console.log(info.data[i].images.original.url);
        }
    }
    catch(error){
        console.log(error);
    }

}       


async function renderCats(){
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cats&limit=48`); 
   
    document.createElement('img');
    info = await response.json();
    let gif_container = document.getElementById('gif_container');
    gif_container.innerHTML = '';
    
    for(let i = 0; i < info.data.length; i++){
        let img = `<img src="${info.data[i].images.original.url}">`
        gif_container.innerHTML += img;
        console.log(info.data[i].images.original.url);
    }
}       


async function renderDogs(){

    console.log("Requesting Data");
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=48`);
   
    document.createElement('img');
    info = await response.json();
    let gif_container = document.getElementById('gif_container');
    gif_container.innerHTML = '';
    
    for(let i = 0; i < info.data.length; i++){
        let img = `<img src="${info.data[i].images.original.url}">`
        gif_container.innerHTML += img;
        console.log(info.data[i].images.original.url);
    }
}       

function openGIF(){
}

function clickGIF(){
    let gif = document.getElementsByName("img");
    addEventListener(onclick, openGIF())

}