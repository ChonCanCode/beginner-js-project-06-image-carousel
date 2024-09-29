let index = 0;

// function show_image(num) {
//     index += num
// }

show_image(index);

function show_image(i) {
    index += i

    let images = document.getElementsByClassName("image");
    //now we created an array of images

    let dots = document.getElementsByClassName("dots");

    for(i = 0; i < images.length; i++)
        images[i].style.display = "none";

    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");

    if(index > images.length -1)
        index = 0;

    if(index < 0)
        index = images.length - 1;

    images[index].style.display = "block";
    dots[index].className += " active"
}