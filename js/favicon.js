let counter = 1;
const favicimg = 288;
let favicons = document.querySelectorAll('link');
function animka() 
{
    favicons.forEach(item => {
        if (item.getAttribute('rel').indexOf('icon') >= 0) 
        {
            item.setAttribute('href', 'imges/test1/' + counter + '.jpeg');
        }
    });
    counter++;
    if (counter == favicimg)
        counter = 1;
}
setInterval(animka, 33);