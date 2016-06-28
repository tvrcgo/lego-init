
module.exports = (job) => {

  // init job
  console.log('init job', process.pid)

  // return runner
  return () => {
    console.log('job tick', +new Date)
    job.send({
      to: 'agent',
      cmd: 'job-tick'
    })
  }
}
