// fetch a random quote
async function getImage()
{
    try
    {
        const response = await fetch('https://picsum.photos/1920/1080?random');

        // return the image
        return response;
    }
    catch(error)
    {
        // return an error
        console.error(error);
        return 'An error occurred while fetching the image.';
    }
}