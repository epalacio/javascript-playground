export default async query => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=jXQGQjcPQny6WYXgKg7gN6FSE3JFvus6&q=${query}`);
    const searchResult = await response.json();
    return searchResult.data.map(item => ({
        thumb: item.images.downsized_still.url,
        full: item.images.original.url
    }));
}