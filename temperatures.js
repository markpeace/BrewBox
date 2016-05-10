setInterval(function() {

  if(typeof coredata !== 'undefined') {
    coredata.heating_active = (coredata.temperature.actual<coredata.temperature.target ? true : false)
    coredata.temperature.actual +=1
  }

},1000)
