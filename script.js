let index = 0;

show_image(index);

function show_image(i) {
    index += i

    let images = document.getElementsByClassName("image");

    let dots = document.getElementsByClassName("dot");

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none";

    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if(index > images.length -1)
        index = 0;

    if(index < 0)
        index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className = " active"
}
        From
<span class="dot"></span>
        TO
<span class=" active"></span>