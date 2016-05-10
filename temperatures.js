setInterval(function() {

  if(coredata) {
    coredata.heating_active = (coredata.temperature.actual<coredata.temperature.target ? true : false)
    coredata.temperature.actual +=1
  }

},1000)
