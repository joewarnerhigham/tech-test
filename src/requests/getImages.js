import axios from 'axios';

const getImages = (query) =>{
    if(!query){
        return Promise.resolve([]);
    } else{
       return axios
           .get(`https://images-api.nasa.gov/search?q=${query}`)
           .then((response) => {
               let imageResults = response.data.collection.items;
               let parsedImages = imageResults.filter(result => result.data[0].media_type === 'image');
               let images = parsedImages.map(image => image.links[0].href);
               return images;

               
           })
           .catch((err) => {
               console.log(err)
           })
    }   
}

export default getImages;