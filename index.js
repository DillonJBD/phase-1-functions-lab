function distanceFromHqInBlocks(someValue){
    
    if(someValue > 42){
        return someValue - 42;
    }else{
        return 42-someValue;
    }
}

function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;

    return feet;

}

function distanceTravelledInFeet(start,destination){
     if(destination >= start){
        return (destination-start) * 264;
     }else{
        return (start-destination) * 264;
     }
}

function calculatesFarePrice(start, destination) {
    const totalFeet = distanceTravelledInFeet(start, destination)


  
    if (totalFeet <= 400) {
        console.log(totalFeet)
      return 0;
      
    }else if(totalFeet >400 && totalFeet < 2000){
        
        return 2.56;
    }else if (totalFeet > 2000 && totalFeet <= 2500) {
        return 25;
      }else{
        return "cannot travel that far"
      }

  }