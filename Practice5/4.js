class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}


function showMonthName(month) {
    try {
    var monthNames = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December" };

    if (month > 12) { throw new MonthException('Incorrect month number')}
    if (typeof month !== 'number') {throw new MonthException('Not a number')}
    if (!month%1 === 0) {throw new MonthException('must be not a float number')}
    } catch(e) { return (`${e.name}, ${e.message}`)}

    return monthNames[month]
}
console.log(showMonthName(10.5));
