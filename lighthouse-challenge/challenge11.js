const bookFreePlatform = (platformList, missionDate) => {
  for (const platform in platformList) {
    if (platformList[platform].bookDate === undefined) {
      platformList[platform].bookDate = missionDate;
      return platformList;
    }
  }
}