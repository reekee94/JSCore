/* */

const myWindow = window.open('','','width=300, height=300');
setTimeout(() => {
    myWindow.resizeTo(500, 500);
    console.log('500');
}, 2000);
setTimeout(() => {
    myWindow.moveTo(200, 200);
    console.log('200');
}, 4000);
setTimeout(() => {
    myWindow.close();
    console.log('closed');
}, 6000);