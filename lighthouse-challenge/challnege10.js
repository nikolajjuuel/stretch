const averageWindSpeed = (weatherEntries) => {
    let allSpeeds = 0;
    for(let i =0; i < weatherEntries.length; i++){
      allSpeeds += weatherEntries[i].windSpeed;
    }
    
    return Math.round(allSpeeds / weatherEntries.length)
  }