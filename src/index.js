const { faker } = require("@faker-js/faker")

module.exports = () => {
  const data = { 
    users: [] 
  }

  for (let i = 0; i < 200; i++) {
    data.users.push({ 
      id: i + 1, 
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
      whatsapp: faker.phone.number(),
      cep: faker.location.zipCode(),
      street: faker.location.street(),
      number: faker.number.int({ max: 1000 }),
      neighborhood: "Neighborhood",
      city: faker.location.city(),
      state: faker.location.state(),
      complement: faker.lorem.sentence(),
    })
  }

  return data
}
