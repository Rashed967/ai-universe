let globalData;
const loadAllData = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayAllData(data.data))
    toggleSpinner(true)
}


// display all data 
const displayAllData = (tools) =>{
    let allTools = tools.tools;
    globalData = allTools.slice(7, 12)
    const loadMoreBtn = document.getElementById('load-more-btn')
    if( allTools.length > 6){
        allTools = allTools.slice(0, 6)
        loadMoreBtn.classList.remove('hidden')
    }
    else{
        loadMoreBtn.classList.add('hidden')    
    }
    const cardContainer = document.getElementById('card-container')
    allTools.forEach(tool => {
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
                <ol id="main-list-container" class="pl-5 mt-2 space-y-1 list-decimal ">
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
    // showAllListItem(features)
    // console.log(tools.tools[0].features)
});
// showAllListItem(tools.tools.features);
toggleSpinner(false)
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
    const featureListContainer = document.getElementById('feature-list-container')
    featureListContainer.innerHTML = ''
    const integrateListContainer = document.getElementById('integrate-list-container')
    integrateListContainer.innerHTML = ''
    const {description, logo, } = data;
    const {score} = data.accuracy;
    const modalDescription = document.getElementById('modal-description')
    modalDescription.innerText = `${description? description : ''}`
    const scoreElement = document.getElementById('score')
    scoreElement.innerText = `${score? score : ''}`
    const [basic, pro, enterprise] = data.pricing;
    const [image] = data.image_link[0]
    const plane1Element = document.getElementById('plane1')
    plane1Element.innerText = ` ${basic.price? basic.price : 'Free of cost'}`
    const plane2Element = document.getElementById('plane2')
    plane2Element.innerText = ` ${pro.price? pro.price : 'Free of cost'}`
    const plane3Element = document.getElementById('plane3')
    plane3Element.innerText = ` ${enterprise.price? enterprise.price : 'Free of cost'}`
    const modalImage = document.getElementById('modal-image')
    modalImage.src = `${data.image_link[0]? data.image_link[0] : ''}`
    


    // feature destructuring 
    
    
    const { 
        1: { feature_name: featureName1, description: description1 },
        2: { feature_name: featureName2, description: description2 },
        3: { feature_name: featureName3, description: description3 }
      } = data.features;

      const features = [featureName1, featureName2, featureName3];
      features.forEach(feature => {
        featureListContainer.innerHTML += `
        <li>${feature? feature : 'No data found'}</li>
        `;          
      });



    //   intregration section 
    data.integrations.forEach(intregetaion => {
        integrateListContainer.innerHTML += `
        <li>${intregetaion? intregetaion : 'No data found'}</li>
        `;
    });

    // const mainListContainer = document.getElementById('main-list-container')
    // console.log(mainListContainer)
}


// show all list item 

 
// const showAllListItem = (features) =>{
//     const mainListContainer = document.getElementById('main-list-container')
//     features.forEach(feature => {
//         mainListContainer.innerHTML += `
//         <li>${feature? feature : 'No data found'}</li>
//         `;    
//         console.log(feature)      
//     });
//     console.log( features)
    // console.log(mainListContainer)
// }

// showAllListItem();

const toggleSpinner = isLoading =>{
    const spinneToggleBtn = document.getElementById('spinne-toggle-btn')
    if(isLoading === true){
        spinneToggleBtn.classList.remove('hidden')
    }
    else{
        spinneToggleBtn.classList.add('hidden')

    }
}


loadAllData();
