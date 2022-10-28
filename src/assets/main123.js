const API  = 'https://instagram188.p.rapidapi.com/userpost/1043427129/7/%7Bend_cursor%7D';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33dc7bbce0msh351df289e2b65f2p1adeb1jsn22a4dc4f68ae',
		'X-RapidAPI-Host': 'instagram188.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async ()=> {
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.data.edges.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img crossorigin="anonymous" src="${video.node.thumbnail_src}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                
                </h3>
            </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } 
    catch (error) {
        console.log(error);
    }
})();