/* Створіть батьківський клас GeometricFigure, який має порожній метод
для визначення площі getArea() та метод toString() для виведення назви класу.
Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure.
Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури.
В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури,
наприклад для кола - радіус r.
Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів
figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування,
виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та
сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce(). */


class GeometricFigure {
    constructor () {};
    getArea(){
        return 0
    };
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
}


class Triangle extends GeometricFigure {
    constructor(triBase, triHeight) {
        super();
        this.triBase = triBase;
        this.triHeight = triHeight;
    }
    getArea () {
        return (this.triBase*this.triHeight)/2;
    }
}

class Square extends GeometricFigure {
    constructor(sideLength){
        super();
        this.sideLegth = sideLength;
    }
    getArea() {
        return this.sideLegth**2;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return (this.radius**2)*Math.PI
    }
}

function handleFigures(figures) {
    let totalArea = figures.reduce(function(result, item) {
        let itemArea = item.getArea();
        console.log(`Geometric figure: ${item.toString()} - area: ${itemArea}`);
        return result + itemArea;
    }, 0);
    console.log(totalArea);
}



const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));

