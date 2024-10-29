// MEME GENERATE
    const memeImage = document.getElementById("meme-image");
    const memeAuthor = document.getElementById("meme-author");
    const generateMeme = document.getElementById("generate-meme");
    const memeTitle = document.getElementById("meme-title");
    
    async function fetchMeme() {
        const response = await fetch('https://meme-api.com/gimme');
        const data =await response.json();
      
            memeTitle.innerHTML = data.title;
        memeImage.src = data.url;
        memeAuthor.innerHTML = `Author: ${data.author}`;
    
        
    
    }
    // MEME GENERATE ON CLICK
    generateMeme.addEventListener("click", fetchMeme);
    fetchMeme();


