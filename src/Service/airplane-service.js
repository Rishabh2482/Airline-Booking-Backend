const { AirplaneRepository } = require('../Repository')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        console.log("Service layer")
        return airplane;
    }catch(error){
        console.log("Service layer error")
        throw error;
    }
}

module.exports = {
    createAirplane
}