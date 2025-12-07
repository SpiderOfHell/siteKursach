const videoWrappers = document.querySelectorAll('.video-wrapper');

videoWrappers.forEach(wrapper => 
{
    const video = wrapper.querySelector('.video');
    let isPlaying = false;            
    wrapper.addEventListener('mouseenter', () => 
    {
        if (!isPlaying) 
        {
                video.play();
                wrapper.classList.add('playing');
                isPlaying = true;
        } 
        else 
        {
            video.pause();
            video.currentTime = 0;
            wrapper.classList.remove('playing');
            isPlaying = false;
        }
    });
});