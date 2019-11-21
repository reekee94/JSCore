/* 3. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів).
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays.
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
	   4) Вивести значення зарплати з новим experience.
	   5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..
*/


class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        // alert(`${fullName}
        // ${fullName} salary ${this.showSalary()}
        // New experience: ${this.#experience}
        // ${fullName} salary: ${this.showSalary()}`);
    }
    showSalary() {
        return console.log(`${this.fullName} salary:`, this.dayRate * this.workingDays);
    }
    showSalaryWithExperience() {
        return console.log(`${this.fullName} salary:`, this.dayRate * this.workingDays*this.#experience)
    }
    get showExp(){
        return this.#experience;
    }

    set setExp(anyV) {
        this.#experience = anyV
    }
}
let worker2 = new Worker('Sue Sigman', 24,12);
let worker1 = new Worker('John Johnson', 20, 23);
let worker3 = new Worker('Mami Takada', 15, 40);
let worker4 = new Worker('Rajesh Bodhi', 10, 25)
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();