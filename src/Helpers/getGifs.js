
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/channels/search?api_key=qUEY4wBqTvEwFRaM6FFIePoMwr2QU2GJ&q=${category}`;

    const resp = await fetch( url );

    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.display_name,
        url: img.featured_gif.images.downsized_medium.url
    } ))
    return gifs;
}
