export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PTjpLvexMsaPA8HGX2EDOPipPC3Jrr1r&q=${ encodeURI(category)}&limit=20`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifData = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifData;

};