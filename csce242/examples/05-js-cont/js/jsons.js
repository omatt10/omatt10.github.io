//json file parsing 
//http://github.com/portiaportia/portiaportia.github.io/blob/master/json/shoes.json

const getFish = async() => {
    const url="https://portiaportia.github.io/json/fish.json"; 
    const response = await fetch(url);
    return response.json(); 
}; 

const showFish = async() => {
    const fish = await getFish();
    const shoeListDiv = document.getElementById("shoe-list");

    fish.forEach((shoe)=>{
        const section = document.createElement("section");
        section.classList.add("fish"); 
        fishListDiv.append(section); 

        const h3 = document.getElement("h3"); 
        h3.innerHTML = shoe.name; 
        section.appendChild(h3); 

        const pLength = document.createElement("p"); 
        pLength

        const ul = document.createElement("ul"); 
        section.append(ul);

        //loop through the colors
        fish.colors.forEach((color)=> { 
            const li = document.createElement("li");
            li.innerHTML = color; 
            ul.append(li); 
        })

        
    });
};

showShoes(); 


//https://openbrewerydb.org/