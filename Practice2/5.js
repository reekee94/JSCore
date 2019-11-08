// let time = new Date().toLocaleTimeString('en-US', { hour12: false,
//     hour: "numeric"});
// if (time >= 5 && time < 11) {
//     alert("Good morning");
// } else if (time >= 11 && time < 17) {
//     alert("Good afternoon");
// } else if (time >= 17 && time < 23) {
//     alert("Good evening");
// } else {
//     alert("Good night");
// };





let time = new Date().toLocaleTimeString('en-US', { hour12: false,
     hour: "numeric"});
switch(+time) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Good morning');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Good afternoon');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log('Good evening');
        break;
    default:
        console.log('Good night');

}


