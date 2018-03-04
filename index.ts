import prompt from "@jace1995/readline";

var score: number = 0;

function generateKey(): string {
    const char = ['+', '-', '*', '/'];
    const key = Math.floor( Math.random() * 4 );
   return char[key];
}

function operation(num1: number, num2: number, key: string): number {
      switch (key) {
          case '+':
             return num1 + num2; 
          case '-':
             return num1 - num2;           
          case '*':
             return num1 * num2;     
          case '/': 
             return Math.round(num1 / num2 * 10) / 10;  
          default: 
             return 0;    
      }
 }
 

 function generate(): number {
   const min = -10;
   const max = 10;
   const res = Math.round(Math.random()  * (max - min ) + min);
   return res ? res : max;
 }

 async function main() {
 while (true) {
     
     const numberFirst = generate();
     const numberSecond = generate();
     const key = generateKey();
     const result = operation(numberFirst, numberSecond, key);
     const answ = await prompt(`${numberFirst} ${key} ${numberSecond} = `);

    if (answ == "!exit") {
        console.log(`Содержание алкоголя ~${score / 10}00 промилле!`);
      
        break;
    }

    if (Number(answ) == result) {
        console.log("Наливай еще!");
    } else {
        score++;
        console.log(`Хватит пить!\nВерный ответ: ${result}`);
    }
 }
}
main();
 





