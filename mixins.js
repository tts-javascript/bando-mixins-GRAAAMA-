let profile = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    avatar: ''
}

function getProfileUpdate(nombre,ciudad) {
    console.log("I heard u dun moved! What ur name and ur new city of residence?")
    let updates = {
        name: nombre,
        city: ciudad
    }
    Object.assign(profile, updates)
    return profile.name
    return profile.city
}

function updateProfile(user, keyVal) {
    Object.assign(user, keyVal)
}

let user1 = {
    name: 'Quavo',
    address: '123 Bando Lane',
    city: 'Atlanta',
    state: 'Georgia',
    zipcode: 30305,
    avatar: 'Migo!'
}

updateProfile(user1, {
    name: 'Richer Quavo',
    address: 'Tha Hills'
})

console.log(user1)