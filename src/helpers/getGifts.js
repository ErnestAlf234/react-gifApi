export const getGifts= async (increible) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=8Vx179ud3Uh109EHYhqeN0nI2Gh4eyY4&q=${increible}&limit=50`;
    const resp=await fetch(url);
    const {data}=await resp.json();
       
    const gifts=data.map( img => (
        {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url,

        }));

        return gifts;
}