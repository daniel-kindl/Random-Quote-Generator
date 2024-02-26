// fetch a random quote
async function getQuote()
{
    try
    {
        const response = await fetch('https://api.quotable.io/random');
        const data     = await response.json();

        // return the quote
        return data.content;
    }
    catch(error)
    {
        // return an error
        console.error(error);
        return 'An error occurred while fetching the quote.';
    }
}