import chalk from "chalk";
import inquirer from "inquirer";
// Classs Player & Opponent
console.log(chalk.red("=".repeat(60)))
console.log(chalk.yellow("\tCode-With-Ayan || Cli__-Adventure_Game"))
console.log(chalk.red("=".repeat(60)))
class Player{
    name: string;
    fuel: number =100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }

}

class Opponent{
    name: string;
    fuel: number =100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}
// Player Name & Select Opponent Name
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.bold.green("Please Enter Your Name"),
})

let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: chalk.bold.magenta("Select Your Opponent"),
    choices: ["Skeleton","Assassin","Zombie"]
})
// Gather Data
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Skeleton"){
    let ask = await inquirer.prompt({
        type: "list",
        name: "option",
        message: chalk.yellow("Select Your Opponent"),
        choices: ["Attack","Drink Portion","Run For Your Life"]
    });
    if(ask.option == "Attack"){
        let num = Math.floor(Math.random() *2)

        if (num > 0 ){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }
        }

        if (num <=0 ){
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        if (o1.fuel <= 0){
            console.log(chalk.green.bold.italic("\tYou Win\n"))
            process.exit()
        }
        }
    }
    if(ask.option == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`Your Drink Health Portion Your fuel is ${p1.fuel}`))
    }
    if(ask.option == "Run For Your Life"){
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
        process.exit()
        
    }

}
}
while(true)































































































