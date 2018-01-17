alert("Are you ready to play?");
alert("DISCLAIMER PLEASE READ: This game has detail in the story. Please read everything carefully! Have fun!");

alert("You wake up and look at the time. You scream as it is 8:00am. You have to be at work at 8:30am. After rushing your morning routine, you arrive at your garage at 8:15am.");

var user = prompt("Do you take the Ferrari, the Lamborghini, or the Toyota?").toUpperCase();


alert("You enter your chosen vehicle. Your usual coffee shop is 5 minutes from your house, and you need your coffee. But, you don’t want to get late for work.");

    
var coffee = prompt("Do you GO TO WORK, or do you stop by the coffee shop and GET COFFEE?");

switch(user) {
    
    case 'FERRARI':
        
    
    if (coffee === 'get coffee'|| coffee === 'coffee') {
        
        alert("You take the Ferrari California, the second fastest car you have, and you stop by the coffee shop for your coffee. The lineup is big. After 6 minutes,  you replenish your fluids and you are ready to work. You arrive at work. You are late. The boss sees you and he fires you on the spot. GAME OVER! REFRESH PAGE AND PLAY AGAIN!");
        throw new Error();
        
    } else if (coffee === 'go to work'|| coffee === 'work') {
        
        alert("You take the Ferrari California, the second fastest car you have, and you go straight to work. You arrive 5 minutes early, but you are not fully awake. Your boss sees you and he is impressed that you came early.");
    }
    
    break;
    
    case 'TOYOTA':
        if (coffee === 'get coffee'|| coffee === 'coffee' || coffee === 'go to work'|| coffee === 'work') {
            
    alert("Out of all the vehicles you have, you went for the Toyota Camry, thinking it’s some “Don`t judge a book by its cover” Easter egg. I don’t know where even to begin on how much of a stupid choice that was. You try to start it, and after 10 minutes, you manage to start it. You fall asleep behind the wheel from all that hard work. You drive off a bridge and you die. Game over.");
    throw new Error();
        }
        
    break;
    
    case 'LAMBORGHINI':
    
    if (coffee === 'get coffee'|| coffee === 'coffee') {
        
        alert("You take the Lamborghini Aventador, the fastest car you have, and you stop by the coffee shop for your coffee. The lineup is big, but they have a special line for Lamborghini drivers, and you get your coffee instantly. You replenish your fluids and you are ready to work. You arrive 8 minutes early, and your boss sees you. He smiles.");
        
    } else if (coffee === 'go to work'|| coffee === 'work') {
        
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
