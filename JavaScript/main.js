alert("Are you ready to play?");
alert("DISCLAIMER PLEASE READ: This game has detail in the story. Please read everything carefully! Have fun!");

alert("You wake up and look at the time. You scream as it is 8:00am. You have to be at work at 8:30am. After rushing your morning routine, you arrive at your garage at 8:15am.");

var user = prompt("Do you take the Ferrari, the Lamborghini, or the Toyota?").toUpperCase();


alert("You enter your chosen vehicle. Your usual coffee shop is 5 minutes from your house, and you need your coffee. But, you don’t want to get late for work.");


var coffee = prompt("Do you GO TO WORK, or do you stop by the coffee shop and GET COFFEE?").toUpperCase();

switch (user) {

  case 'FERRARI':


    if (coffee === 'GET COFFEE') {

      alert("You take the Ferrari California, the second fastest car you have, and you stop by the coffee shop for your coffee. The lineup is big. After 6 minutes,  you replenish your fluids and you are ready to work. You arrive at work. You are late. The boss sees you and he shakes his head.");


    } else if (coffee === 'GO TO WORK') {

      alert("You take the Ferrari California, the second fastest car you have, and you go straight to work. You arrive 5 minutes early, but you are not fully awake. Your boss sees you and he is impressed that you came early.");
    }

    break;

  case 'TOYOTA':

    if (coffee === 'GET COFFEE' || coffee === 'GO TO WORK') {

      alert("Out of all the vehicles you have, you went for the Toyota Camry, thinking it’s some “Don`t judge a book by its cover” Easter egg. I don’t know where even to begin on how much of a stupid choice that was. You try to start it, and after 10 minutes, you manage to start it. You fall asleep behind the wheel from all that hard work. You drive off a bridge and you die. Game over.");
      throw new Error();
    }

    break;

  case 'LAMBORGHINI':

    if (coffee === 'GET COFFEE') {

      alert("You take the Lamborghini Aventador, the fastest car you have, and you stop by the coffee shop for your coffee. The lineup is big, but they have a special line for Lamborghini drivers, and you get your coffee instantly. You replenish your fluids and you are ready to work. You arrive 8 minutes early, and your boss sees you. He smiles.");

    } else if (coffee === 'GO TO WORK') {

      alert("You take the Lamborghini Aventador, the fastest car you have, and you decide to go straight to work. Bad idea. You zoom past the coffee shop, and 5 seconds later, you pass out behind the wheel from lack of sleep and the high speed of the car. Your car goes full speed into a transit bus. You are dead. Game over.");
      throw new Error();
    }

    break;

  default:
    alert("Invalid command. Game Over. Please REFRESH YOUR PAGE!");
    throw new Error();
}

alert("You enter your work, a high-rise office in New York, New York. You see a homeless man in the lobby.");

var homeless = prompt("Do you give him money,  or do you ignore him?").toUpperCase();

if (homeless === 'GIVE MONEY' || homeless == 'MONEY' || homeless === 'GIVE HIM MONEY') {

  alert("You take out your wallet and you hand a $20 bill to the man. He cries and tells you that you are an angel. You feel happy. You take the elevator up to your workplace.");

} else if (homeless === 'IGNORE' || homeless === 'IGNORE HIM') {

  alert("You ignore the man, and you take the elevator up to your workplace. Good samaritan achievement DISABLED!");

}

alert("You walk to your desk, and it has garbage everywhere from the office party, last night.");

var clean = prompt("Do you CLEAN UP DESK, or do you CALL JANITOR?").toUpperCase();

if (clean === 'CLEAN UP DESK' && coffee === 'GET COFFEE') {

  alert("You decide to clean up the desk yourself. The janitor walks by and appreciates you gesture.");

} else if (clean === 'CLEAN UP DESK' && coffee !== 'GET COFFEE' || clean === 'CALL JANITOR' && coffee !== 'GET COFFEE') {

  alert("You are too tired to clean it up, so you call the janitor. He grumbles and cleans up the filthy mess.  He leaves a cup of coffee. “Next time, don’t forget your coffee.” He mutters.")

} else if (clean === 'CALL JANITOR' && coffee === 'GET COFFEE') {

  alert("You let the janitor handle it. You call him to clean it up. He grumbles and cleans up the filthy mess.");

} else {

  alert("Invalid command. Game over. PLEASE REFRESH PAGE!");
  throw new Error();
}

alert("Your desk is clean, and you start working. You manage to close 5 sales in the next 20 minutes. Good job!");

alert(" Suddenly, the floor vibrates and a loud bang emits on the first floor. You look around and everyone is confused. A security guard rushes in from the elevator and shouts ‘Everyone, we are going in a lockdown! Get to the break room and lock all doors and close all shutters!’ ");

alert("’ In a split second, everyone is panicking and running for the breakroom.");



