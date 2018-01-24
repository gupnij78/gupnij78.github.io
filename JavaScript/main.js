<!DOCTYPE html>
<head>
<script>
alert("Are you ready to play?");
alert("DISCLAIMER PLEASE READ: This game has detail in the story. Please read everything carefully! ANSWER WITH EXACT COMMAND AND SPELLING! Have fun!");

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

} else {

alert("INVALID COMMAND! GAME OVER!");
throw new Error();

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

alert("Suddenly, the floor vibrates and a loud bang emits on the first floor. You look around and everyone is confused. A security guard rushes in from the elevator and shouts ‘Everyone, we are going in a lockdown! Get to the break room and lock all doors and close all shutters!’ ");

alert("’ In a split second, everyone is panicking and running for the breakroom.");

var choiceOne = prompt("Do you GO TO BREAKROOM, or do you STAY UNDER DESK?").toUpperCase();

if (choiceOne === 'GO TO BREAKROOM') {
alert("You head for the breakroom. A co-worker closes the door, and closes the shutters. Everyone stays quiet.");

alert("3 minutes later, a silenced shot is heard from outside the door. Footsteps come closer to the door.");

alert("The door opens, and a tall person in a black jumpsuit appears at the door with a rifle in his hand. O O F!");

alert("Everything happens very fast, and it doesn't end well. Game over.");
throw new Error();

} else if (choiceOne === 'STAY UNDER DESK') {

alert("You stay under your desk, as the breakroom would be a bad idea.");

} else {

alert("INVALID COMMAND! GAME OVER!");
throw new Error();
}

alert("You hear the security guard loading in a gun. Your father used to take you hunting, so you know a ton about guns. You look through the crack of you desk, and you see the guard barricaded behind a wall, his gun aiming at the elevators. He might need help");

var choiceTwo = prompt("Do you STAY IN HIDING, or do you GO TO HIM?").toUpperCase();

if (choiceTwo === 'GO TO HIM') {

alert("You stand up. The guard shoots you, thinking you’re an intruder. You are dead. Game over.");
throw new Error();

} else if (choiceTwo === 'STAY IN HIDING') {

alert("You stay in hiding.  An elevator ding emits form the elevators, and heavy footsteps are heard.");

} else {

alert("INVALID COMMAND! GAME OVER!");
throw new Error();

}


alert("“Whoever you are, please lower your weapon. I am authorized to fire any hostiles.” Says the guard.");

alert("A silenced shot emits, and you look in shock, as the guard falls to the ground, his white shirt stained with blood.");

alert("The footsteps continue and you manage to see a tall person in a black jumpsuit.");

alert("He is armed with an assault rifle, and he is heading for the breakroom. You now understand that this is a terrorist attack, and that he is going to kill everyone in the breakroom. You have to do something fast!");

var choiceThree = prompt("You look around, and you see a metal pencil holder and a cellphone. Will you CALL 911, USE PENCIL HOLDER as a weapon, or PUT CELLPHONE IN PENCIL HOLDER?").toUpperCase();

if (choiceThree === 'USE PENCIL HOLDER') {

alert("You grab the pencil holder, and you throw it at the intruder. He shouts in pain, and he stops his footsteps.");

alert("The footsteps start again, and they are coming closer to you.");

alert("The intruder is standing right in front of your desk, and he picks up the cellphone.");

alert("He aims the gun underneath the desk and fires. Game over.");
throw new Error();

} else if (choiceThree === 'CALL 911') {

alert("You grab the cellphone and try to dial 911. The cellphone’s ringer was on, and the number tones emit from the phone.");

alert("The footsteps stop.");

alert("They start again and they are coming your way.");

alert("The intruder stops in front of your desk. *911 what is your emergenc-- *BANG!* Game over.");
throw new Error();

} else if (choiceThree === 'PUT CELLPHONE IN PENCIL HOLDER') {

alert("You take both. You set the cellphone alarm to 20 seconds, and you put the cellphone into the pencil holder.");

} else {

alert("INVALID COMMAND! GAME OVER!");
throw new Error();

}

alert("You slide the pencil holder 3 desks down from yours.");

alert("The phone rings, and the intruder walks towards it.");

alert("He reaches down to grab the phone, and you bust into action, tackling him down. His rifle falls to the ground.");

var finalChoice = prompt("Do you SHOOT HIM, or do you KNOCK HIM OUT?").toUpperCase();

if (finalChoice === 'SHOOT HIM') {

alert("You go for the rifle, but he grabs your foot. You hit your head on the floor, and you cannot move. He picks up the rifle and aims it at your head. GAME OVER!");
throw new Error();

} else if (finalChoice === 'KNOCK HIM OUT') {

alert("He shouts in pain, as you knock him out with a few punches.");

} else {

alert("INVALID COMMAND! GAME OVER!");
throw new Error();

}

alert("You call for everyone in the breakroom to help you hold him down. 30 minutes later, an entire SWAT force arrives, and they evacuate everyone.");

alert("They get to you, still holding down the intruder. They put him in cuffs, and he is taken away.");

alert("You are given a bravery award, a day later, at a City Hall ceremony. YOU WIN!");

alert("CREDITS");

alert("Coding: Gupaul Nijjar");

alert("Story: Gupaul Nijjar");

alert("Basically everything that made this game apart from JSFIDDLE and GITHUB: Gupaul Nijjar");
</script>
<style>

h1 {
color: red;
}

body {
background-color: black;
}

</style>
</head>

<body>

<h1>Workplace Catastrophe Adventure</h1>

</body>
</html>
