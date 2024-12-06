import chalk from "chalk";

class ConsoleRes {
  constructor(message, color = "green") {
    this.print(message, color);
  }

  print(message, color) {
    switch (color) {
      case "red":
        console.log(chalk.red(message));
        break;
      case "green":
        console.log(chalk.green(message));
        break;
      case "yellow":
        console.log(chalk.yellow(message));
        break;
      case "blue":
        console.log(chalk.blue(message));
        break;
      default:
        console.log(message); // Default color if invalid color is provided
        break;
    }
  }
}

export { ConsoleRes };
