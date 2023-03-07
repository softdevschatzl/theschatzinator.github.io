// set a delay for when the popup should appear
setTimeout(function(){ 
    // make the arrow div visible
    document.querySelector('.arrow').style.visibility = 'visible';

    // position the arrow directly to the right of .homeButton
    document.querySelector('.arrow').style.position = 'absolute';
    document.querySelector('.arrow').style.left = 
        document.querySelector('.homeButton').offsetLeft + 
        document.querySelector('.homeButton').offsetWidth + 'px';
    
    // position the text directly to the right of the arrow image
    document.querySelector('#text').style.position = 'absolute';
    document.querySelector('#text').style.left =
        document.querySelector('.arrow').offsetLeft +
        document.querySelector('.arrow').offsetWidth + 'px';
}, 3000); // wait 3 seconds before showing the popup