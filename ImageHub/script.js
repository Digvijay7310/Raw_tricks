const searchInput = document.getElementById('searchInput')
const gallery = document.getElementById('gallery')
const noResult = document.getElementById("noResults")
const images = gallery.getElementsByClassName("image-card")

searchInput.addEventListener("input",()=>{
    const searchValue = searchInput.value.toLowerCase()
    let found = false;

    for(let img of images){
        const keywords = img.getAttribute("data-name")
        if(keywords.includes(searchValue)){
            img.style.display = 'block';
            found = true;
        } else {
            img.style.display = 'none'
        }
    }

    noResult.style.display = found ? 'none' : 'block'
})