import prompt from "@jace1995/readline";

var score: number = 0;

function GenerateKey(): number {
   const Key = Math.ceil ( Math.random() * 4 );
   return Key;
}

function Operation(num1: number, num2: number, Key: number): number {
      switch (Key) {
          case 1:
             return num1 + num2; 
          case 2:
             return num1 - num2;           
          case 3:
             return num1 * num2;     
          case 4: 
             return Math.round(num1 / num2 * 10) / 10;  
          default: 
             return 0;    
      }
 }

 function Generate(): number {
   const min = -10;
   const max = 10;
   const res = Math.round(Math.random()  * (max - min ) + min);
   return res ? res : max;
 }

 async function main() {
 while (true) {
     
     const numberFirst = Generate();
     const numberSecond = Generate();
     const Key = GenerateKey();
     const Char = ['+', '-', '*', '/'];
     const Result = Operation(numberFirst, numberSecond, Key);
     const Answ = await prompt(`${numberFirst} ${Char[ Key - 1 ]} ${numberSecond} = `);

    if (Answ == "!exit") {
        console.log(`Содержание алкоголя ~${score / 10}00 промилле!`);
      
        break;
    }

    if (Number(Answ) == Result) {
        console.log("Наливай еще!");
    } else {
        score++;
        console.log(`Хватит пить!\nВерный ответ: ${Result}`);
    }
 }
}
main();
 





