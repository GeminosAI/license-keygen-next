'use strict'

/* Dev libs */
const chai = require('chai')
const expect = chai.expect

/* source */
const LicenseGen = require('../lib')

var license
const userInfo = {
  name: 'Geminos.ai',
  country: 'USA',
  town: 'Remote',
  zip: 'Remote',
  address: 'Remote',
}

describe('createLicense', () => {
  console.time('createLicense')
  it('return proper license', () => {
    try {
      const userData = {
        info: userInfo,
        validity: "2023-11-02",
        prodCode: 'CAUSEWAY',
        appVersion: '1.3.1.0full',
      }
      license = LicenseGen.createLicense(userData)
      console.log(license)
      expect(license).to.be.an('object')
      expect(license).to.have.property('message', 'ok')
      expect(license).to.have.property('errorCode', 0)
      //expect(license).to.have.property('license').that.length(33)
    } catch (exception) {
      console.log(exception)
    }
  })
  console.timeEnd('createLicense')
})


describe('validateLicense', () => {
  console.time('validateLicense')

  it('validate license', () => {
    const userData = {
      info: userInfo,
      validity: "2023-11-02",
      prodCode: 'CAUSEWAY',
      appVersion: '1.3.1.0full',
      // osType: 'IOS8'
    }
    console.log("validateLIcense license: " ,license)
    const validity = LicenseGen.validateLicense(userData, license?.license)
    expect(validity).to.be.an('object')
    expect(validity).to.have.property('message', 'ok')
    expect(validity).to.have.property('errorCode', 0)
    //console.log(validity)
  })
  console.timeEnd('validateLicense')
})