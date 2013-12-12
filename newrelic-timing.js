;window.newrelicTiming = {
  _marks: {},

  mark: function (name) {
    this._marks[name] = +new Date
  },

  measure: function (markName, against)
    if (against) {
      referenceTime = this._marks[against]
      compareTime = this._marks[markName]
    } else {
      referenceTime = this._marks[markName]
      compareTime = +new Date
    }
    return compareTime - referenceTime
  },

  sendNRBeacon: function() {
    if (!this.checkBeaconRequirements()) return

    fragmentName = window.location.hash.replace('#','%23')
    domTime = this.measure('dom_loaded', 'nav_start')
    renderTime = this.measure('page_rendered', 'nav_start')
    NREUM.inlineHit(fragmentName, 0, 0, 0, domTime, renderTime)
  },

  checkBeaconRequirements: function() {
    if (!NREUM)
      return false
    return this._marks['nav_start'] && this._marks['dom_loaded'] && this._marks['page_rendered']
  }
};