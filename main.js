const newUser = prompt("Введите свое имя");
const helloUser = alert(`Привет ${newUser}! `);

const firstNum = prompt("Введите число которую хотите возвести в степень");
const secondNum = prompt("Введите степень которую хотите возвести в число");
console.log(firstNum ** secondNum);

const text = "my text";
if (text == "some text") {
  console.log("another text");
} else console.log("some text");

let someNum = -2;
if (someNum == 0) {
  console.log((someNum = 1));
} else if (someNum < 0) {
  console.log((someNum = "less then zero"));
} else if (someNum > 0) {
  console.log((someNum *= 10));
}

const someNumUser = prompt("Введите число");
let result = 1;
if (someNumUser < 5) {
  console.log((result = 0));
} else if (someNumUser >= 5) {
  console.log((result = 1));
}

const randomNum1 = parseInt(prompt("Введите первое число"));
const randomNum2 = parseInt(prompt("Введите второе число"));
if (randomNum1 > randomNum2) {
  console.log(`Большее число:${randomNum1}`);
} else if (randomNum1 < randomNum2) {
  console.log(`Большее число:${randomNum2}`);
} else if (randomNum1 == randomNum2) {
  console.log("Вы ввели одинаковые числа");
}

const num1 = parseInt(prompt("Введите первое число"));
const num2 = parseInt(prompt("Введите второе число"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Пожалуйста, введите числа");
} else {
  if (num2 === 0) {
    console.log("На ноль делить нельзя");
  } else if (num1 % num2 === 0) {
    console.log(`${num1} кратно ${num2}`);
  } else {
    console.log(`${num1} не кратно ${num2}`);
  }
}

let yourResult = parseInt(prompt("Введите свои средний балл от 1 до 10"));
if (yourResult == 0 || yourResult > 10 || yourResult < 0 || isNaN(yourResult)) {
  console.log("Внимательно читай, число от 1 до 10");
} else if (yourResult >= 1 && yourResult <= 4) {
  console.log("Двоечник иди учись!");
} else if (yourResult >= 5 && yourResult <= 8) {
  console.log("Неплохо, но давай еще поднажмем!");
} else if (yourResult >= 9 && yourResult <= 10) {
  console.log("Ого, да ты настоящий отличник!");
}

const resultExam = prompt("Введите ваш балл за экзамен от 0 до 100");
const numberOfProjects = prompt("Сколько проектов вы успешно сделали?");
if (resultExam >= "90" && numberOfProjects >= "10") {
  console.log(
    `100 баллов Гриффиндору \n Ваш общий балл: ${resultExam} \nКолличество ваших проектов ${numberOfProjects}`
  );
} else if (
  resultExam >= "75" &&
  resultExam <= "89" &&
  numberOfProjects >= "5" &&
  numberOfProjects <= "9"
) {
  console.log(
    `90 баллов Слизарену \n Ваш общий балл: ${resultExam} \n Колличество ваших проектов: ${numberOfProjects}`
  );
} else if (
  resultExam >= "50" &&
  resultExam <= "74" &&
  numberOfProjects >= "2" &&
  numberOfProjects <= "4"
) {
  console.log(
    `75 баллов Когтеврану \n Ваш общий балл:${resultExam}\nКолличество ваших проектов:${numberOfProjects}`
  );
} else
  console.log(
    `0 баллов Пуффендуй в пролете \n Ваш общий балл: ${resultExam} \n Колличество ваших проектов: ${numberOfProjects}`
  );
const rentDay = parseInt(
  prompt("Насколько дней вы хотите арендовать Авто"),
  10
);
const dailyRate = 40;

if (Number.isInteger(rentDay) && rentDay > 0) {
  let totalAmount = rentDay * dailyRate;
  let originalAmount = totalAmount;

  if (rentDay >= 7) {
    totalAmount -= 50;
  } else if (rentDay >= 3 && rentDay <= 6) {
    totalAmount -= 20;
  }

  if (rentDay > 2) {
    console.log(`Ты мне должен: ${totalAmount}$ где мои бабки, Лебовский?`);
  } else {
    console.log(`С тебя всего то: ${originalAmount}$`);
  }
} else {
  console.log(
    "Пожалуйста, введите положительное целое число для количества дней аренды."
  );
}
