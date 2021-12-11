const checkAllGauges = (gaugeList) => {
  for (const id in gaugeList) {
    const gauge = gaugeList[id];
    if (gauge.current >= gauge.min && gauge.current <= gauge.max) {
    } else {
      return false
    }
  }

  return true;
}

checkAllGauges(gaugeList)