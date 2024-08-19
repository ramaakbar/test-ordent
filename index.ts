// 'pnpm run dev' to start

function task1(directions: Array<string>) {
  const direction = ["n", "e", "s", "w"];
  if (!directions.every((val) => direction.includes(val))) return false;
  if (directions.length !== 10) return false;
  return true;
}

console.log("Task 1 :");
console.log(task1(["n", "s", "w", "e"]));
console.log(task1(["n", "s", "w", "e", "n", "n", "w", "s", "e", "w"]));
console.log(task1(["n", "s", "w", "e", "n", "n", "w", "s", "e", "p"]));
console.log("============");

function task2(num1: number, num2: number) {
  if (num1 > num2) return num1 % num2;
  return num2 % num1;
}

console.log("Task 2 :");
console.log(task2(17, 5));
console.log(task2(13, 72));
console.log(task2(0, -1));
console.log(task2(0, 1));
console.log("============");

function task3(letters: Array<string>) {
  let result = "";

  for (let i = 0; i < letters[0].length; i++) {
    for (let j = 0; j < letters.length; j++) {
      result += letters[j][i];
    }
  }

  return result;
}
console.log("Task 3 :");
console.log(task3(["aa", "bb", "cc"]));
console.log(task3(["ad", "be", "cf"]));
console.log("============");

function task4(name: string) {
  let result = "";

  for (let tempName of name.split(" ")) {
    if (tempName.toLowerCase().includes("-")) {
      for (let tempName2 of tempName.split("-")) {
        result += tempName2[0].toUpperCase();
      }
    } else if (tempName.toLowerCase() === "von") {
      result += "v";
    } else {
      result += tempName[0].toUpperCase();
    }
  }

  return result;
}

console.log("Task 4 :");
console.log(task4("Thomas Meyer"));
console.log(task4("martin schmidt"));
console.log(task4("Jan-Erich Schmidt"));
console.log(task4("Paul Meyer-Schmidt"));
console.log(task4("Paul von Lahnstein"));
console.log(task4("Martin von Lahnstein-Meyer"));
