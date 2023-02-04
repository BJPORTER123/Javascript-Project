use CountryDatabase

db.dropDatabase()

db.CountryList.insertMany([
    {
    name: "Scotland",
    comments: "Great place!"
    }
])