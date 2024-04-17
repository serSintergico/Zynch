class UserClass {
  formatUser(payload){

    const vehicles = payload.map( moto => ({
      idMoto: moto.vehicle._id,
      moto: moto.vehicle.engineSerialNumber,
      bateria1: moto.battery1,
      bateria2: moto.battery2
    }))

    const response = {
      ok: true,
      usuario: this.fullName,
      motos: vehicles
    }

    return response
  }
}

module.exports = UserClass