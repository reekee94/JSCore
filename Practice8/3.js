/* Знайти одну d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"] */
string = 'cdbBdbsbz';
let resultR = [];
resultR.push(string.match(/db+d/i)[0]);
resultR.push(resultR[0].match(/b+/ig)[0]);
resultR.push(resultR[0].match(/d?/)[0]);
console.log(resultR);
