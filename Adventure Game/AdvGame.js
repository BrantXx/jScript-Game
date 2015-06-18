var user = prompt("You're walking down the road when suddenly you stumble upon a Troll! You have 3 options : Fight, Pay, or Run!".toLowerCase());
switch(user){
    case 'fight':
	var hoursOfSleep = prompt("How many hours of sleep did you get?");
	var hadFood = prompt("Have you ate anything in the past hour?".toLowerCase());
		if (hoursOfSleep <= 7){
                tired = true;
            }
		else if (hoursOfSleep >= 8){
                tired = false;
            }
		else{
                console.log("Please enter a number. Use 8 instead of Eight!");
            }
            
		if (hadFood === "yes"){
                hungry = false;
			}
		else if (hadFood === "no"){
				hungry = true;
            }
		else{
                console.log("Please answer yes or no");   
            }
            
		if(tired && hungry){
				console.log("You do not have the strength. You are beaten!");
			}
		else if (tired || hungry){
				console.log("You do not have the strength. But have managed to turn and slip away!");
			}
		else{
				console.log("You are not hungry or tired. Troll has been beaten! You continue walking and reach home.");
			}
    break;
	
	case 'pay':
	var hasMoney = prompt("Do you have any money on you?".toLowerCase());
		if (hasMoney === "yes"){
				money = true;
			}
		else if (hasMoney === "no"){
				money = false;
			}
		else{
				console.log("Please answer yes or no.");
			}
			
		if(money){
		var trollMoney = prompt("Is the money in Troll Coins?".toLowerCase());
			if (trollMoney === "yes"){
				pass = true;
			}
			else if (trollMoney === "no"){
				pass = true;
			}
			else{
				console.log("Please answer yes or no.")
			}
		}
		else{
			pass = false;
		}
		
		if(pass){
			console.log("Troll Coins or not, the Troll accepts the money. You continue walking and reach home.");
		}
		else{
			console.log("Without paying the troll, he is angered! You are beaten!")
		}
	break;
	
	case 'run':
		console.log("You are frightened by the Troll. You decide to turn around and run away. You lose.")
	break;
	
    default:
        console.log(user + " is not an option!");
        break;    
}