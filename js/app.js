

baguetteBox.run('.gallery');

// const search = new Filter('search', 'data-caption');

function filterSearch() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let photo = document.getElementsByTagName("a");

    for (let i = 0; i < photo.length; i++) {
        caption = photo[i].getAttribute("data-caption").toUpperCase();
        let include = caption.includes(filter);
        if (!include) {
            photo[i].style.display = "none";
        } else {
            photo[i].style.display = "";
        }
    }

}