setInterval(function() {

  if(typeof coredata !== 'undefined') {
    coredata.heating_active = (coredata.temperature.actual<coredata.temperature.target ? true : false)

    if(coredata.heating_active && coredata.emulation_mode) coredata.temperature.actual +=1

    if(coredata.heating_active && !coredata.emulation_mode) console.warn("need to write code to control the induction hob")

  }

},1000)
