import data from './hotelCostumers.json';

class Costumer {
    constructor(id, firtsName, lastName, email, gender, ip_address) {
        this.id = id,
        this.firtsName = firtsName,
        this.lastName = lastName,
        this.email = email,
        this.gender = gender,
        this.ip_address = ip_address
    }
}

const costumerİd = data.map(data => {
    return data.id
})

const costumerFirstName = data.map(data => {
    return data.first_name
})

const costumerLastName = data.map(data => {
    return data.last_name
})

const costumerEmail = data.map(data => {
    return data.email
})

const costumerGender = data.map(data => {
    return data.gender
})

const costumerİpAddress = data.map(data => {
    return data.ip_address
})

for (var i = 0; i < data.length; i++) {
    console.log(new Costumer(costumerİd[i], costumerFirstName[i], costumerLastName[i], costumerEmail[i], costumerGender[i], costumerİpAddress[i]));
}