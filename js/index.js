let globalData;
const loadAllData = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllData(data.data))
}


// display all data 
const displayAllData = tools =>{
    const cardContainer = document.getElementById('card-container')
    tools.tools.forEach(tool => {
        const {name, image, published_in, features, id} = tool;
        // console.log(name,image, published_in, features);
     
    cardContainer.innerHTML += `
    <div class="mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${image}" alt="" />
    </a>
    <div class="p-5">
            <div class="border-b-2 pb-4 border-black">
                <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Features</h5>
                <ol id="list-container" class="pl-5 mt-2 space-y-1 list-decimal ">
                    <li>You might feel like  o</li>
                    <li>Nested navigation in UIs is a ble.</li>
                    <li>Nesting tons of t helpful.</li>
                </ol>
            </div>
            
           <div class="flex justify-between mt-4 items-center">
            <div>
                <h3 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h3>
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400"><i class="fa-solid fa-calendar-days"></i> <span>${published_in}</span> </p>
            </div>
            <div>
                
                <label onclick="singleDataLoad('${id}')" for="my-modal-5" class="btn"><i class="fa-solid fa-arrow-right"></i></label>
            </div>
           </div>  
    </div>
</div>
    `;
 
   });
}


// single data load 
const singleDataLoad = toolId =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${toolId}`
    fetch(url)
    .then(res => res.json())
    .then(data => showSingleData(data.data))
    // console.log(toolId)
}

// show signgle data on modal 
const showSingleData = data =>{
    const {description, logo, } = data;
    const {score} = data.accuracy;
    const modalDescription = document.getElementById('modal-description')
    modalDescription.innerText = `${description? description : ''}`
    const scoreElement = document.getElementById('score')
    scoreElement.innerText = `${score? score : ''}`
    const [plane1, plane2, plane3] = data.pricing;
    // const [price1, price2, price3] = plane1
    const{price} = plane1
    const plane1Element = document.getElementById('plane1')
    plane1Element.innerText = ` ${price? price : 'Free of cost'}`
    // const plane2Element = document.getElementById('plane2')
    // plane2Element.innerText = ` ${price? price : 'Free of cost'}`
    console.log(plane1Element)
}


loadAllData();
