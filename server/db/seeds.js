use CountryDatabase

db.dropDatabase()

db.BucketList.insertMany([{name: "Turkey"}])

db.VisitedList.insertMany([{name: "Turkey"}])