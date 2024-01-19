//Our main function
function getScore(score) {
    //Our 1st function
    function determineWinners(score) {
    //Just need to declare our 1st condintion if 
        if (score < 10) {
            return "less than 10 winners"
    //But it is 
        } else if (score >= 11 && score <= 20) {
            return "about 11 and 20 winners"
    //But it is 
        } else if (score >= 21 && score <= 50) {
            return "about 21 and 50 winners "
    //But it is 
        } else if (score >=51 && score <=80) {
            return "about 51 and 80 winners"
    //But it is
        } else if (score >=81 && score <=90) {
            return "about 81 and 90 winners" 
    //But it is
        } else if (score >=91 && score <=100) {
            return "about 91 and 100 winners"
    //But it is 
        } else if (score >= 101) {
            return "101 or more"
        }

               
    }

//Our 2nd function 
    function determineLevel(score) {
    //We just need to declare our 1st condition 
        if (score < 10) {
            return "Iron"
    //But it is 
        } else if (score >= 10 && score <= 20) {
            return "Bronze"
    //But it is 
        } else if (score >= 21 && score <= 50) {
            return "Silver"
    //But it is 
        } else if(score >=51 && score <= 80) {
            return "Gold"
    //But it is 
        } else if(score >=81 && score <= 90) {
            return "Diamond"
    //But it is 
        } else if(score >=91 && score <= 100) {
            return "Legendary"
    //But it is 
        } else if(score >=101) {
            return "Immortal"
        }
    }

    // Call the functions to get the results
    let winnerStatus = determineWinners(score);
    let heroLevel = determineLevel(score);


//Our message about the result of all these  
    console.log("The hero has a balance of " + winnerStatus + " and he is " + heroLevel)
}

