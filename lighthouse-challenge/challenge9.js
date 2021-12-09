const listAstronautJobs = (roster) => {
    const jobs = []
    for (let i = 0; i < roster.length; i++){
      jobs.push(roster[i].job)
    }
    return jobs;
  }
  