 

function FullScreen() {
    document.documentElement.requestFullscreen();
}
        
document.addEventListener('copy', (e) => {
    e.preventDefault();
    });

    
 document.addEventListener('paste', (e) => {
    e.preventDefault();
});

        // Tab switching / minimizing
document.addEventListener('visibilitychange', () => {
        submit();
});

document.addEventListener('fullscreenchange', () => {

    if (!document.fullscreenElement) {
        submit();
    }

});

    