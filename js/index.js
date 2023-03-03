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
        const {name, image, published_in, features} = tool;
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
                <button type="button"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
           </div>  
    </div>
</div>
    `;
 
   });
}



loadAllData();
