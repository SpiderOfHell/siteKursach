function openPopup1() 
{
    var popup1 = document.querySelector('.popup1');
    var overlay1 = document.querySelector('.popup-overlay1');
    if (popup1) 
    {
        popup1.style.display = 'block';
        overlay1.style.display = 'block';
        document.body.classList.add('body-no-scroll1');
    }
}
function closePopup1() 
{
    var popup1 = document.querySelector('.popup1');
    var overlay1 = document.querySelector('.popup-overlay1');
    if (popup1) 
    {
        popup1.style.display = 'none';
        overlay1.style.display = 'none';
        document.body.classList.remove('body-no-scroll1');
    }
}
function openMessagePopup1() 
{
    var popup1 = document.getElementById('messagePopup1');
    var overlay1 = document.getElementById('messagePopupOverlay1');
    if (popup1) 
    {
        popup1.style.display = 'block';
        overlay1.style.display = 'block';
        document.body.classList.add('body-no-scroll1');
    }
}
function closeMessagePopup1() 
{
    var popup1 = document.getElementById('messagePopup1');
    var overlay1 = document.getElementById('messagePopupOverlay1');
    if (popup1) 
    {
        popup1.style.display = 'none';
        overlay1.style.display = 'none';
        document.body.classList.remove('body-no-scroll1');
    }
}
document.addEventListener('DOMContentLoaded', function() 
{
    var popupBtn1 = document.querySelector('.open-popup-btn1');
    if (popupBtn1)
    {
        popupBtn1.addEventListener('click', openPopup1);
    }
    var writeButton1 = document.querySelectorAll('#writebutton1, .popup-opener1, .card-btn1');
    writeButton1.forEach(function(button) 
    {
        button.addEventListener('click', function() 
        {
            openMessagePopup1();
        });
    });
});
document.addEventListener('keydown', function(event) 
{
    if (event.key === 'Escape') 
    {
        closePopup1();
        closeMessagePopup1();
    }
});