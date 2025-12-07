function openPopup() 
{
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.popup-overlay');
    if (popup) 
    {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('body-no-scroll');
    }
}
function closePopup() 
{
    var popup = document.querySelector('.popup');
    var overlay = document.querySelector('.popup-overlay');
    if (popup) 
    {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
    }
}
function openMessagePopup() 
{
    var popup = document.getElementById('messagePopup');
    var overlay = document.getElementById('messagePopupOverlay');
    if (popup) 
    {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        document.body.classList.add('body-no-scroll');
    }
}
function closeMessagePopup() 
{
    var popup = document.getElementById('messagePopup');
    var overlay = document.getElementById('messagePopupOverlay');
    if (popup)
    {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('body-no-scroll');
    }
}
document.addEventListener('DOMContentLoaded', function() 
{
    var popupBtn = document.querySelector('.open-popup-btn');
    if (popupBtn) 
    {
        popupBtn.addEventListener('click', openPopup);
    }
    var writeButton = document.querySelectorAll('#writebutton, .popup-opener, .card-btn');
    writeButton.forEach(function(button) 
    {
        button.addEventListener('click', function() 
        {
            openMessagePopup();
        });
    });
});
document.addEventListener('keydown', function(event) 
{
    if (event.key === 'Escape') 
    {
        closePopup();
        closeMessagePopup();
    }
});