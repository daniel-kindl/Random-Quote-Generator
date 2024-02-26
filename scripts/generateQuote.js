//* get DOM elements
const container_generatedImage = document.getElementById('generatedImage');
const div_generatedQuote       = document.getElementById('generatedQuote');
const btn_generateQuote        = document.getElementById('generateQuote');

// add click event onto btn
if (btn_generateQuote)
{
    btn_generateQuote.addEventListener('click', showQuoteImage);
}

async function generateImage()
{
    // get image from API
    const image = await getImage();

    // create a new image element
    const img_generatedImage        = new Image();
    img_generatedImage.src          = image.url;
    img_generatedImage.style.width  = '90%';
    img_generatedImage.style.height = '90%';
    
    // append new image
    container_generatedImage.innerHTML = '';
    container_generatedImage.appendChild(img_generatedImage);
}

async function generateQuote()
{
    // get quote from API
    const quote = await getQuote();

    // append quote
    div_generatedQuote.innerHTML = '';
    div_generatedQuote.innerHTML = `"${quote}"`;
}

function showQuoteImage()
{
    generateImage();
    generateQuote();
}