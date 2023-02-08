use CountryDatabase

db.dropDatabase()

db.BucketList.insertMany([{
    name: {
        common: "Bosnia and Herzegovina",
        official: "Bosnia and Herzegovina",
    },
    cca2: "BA",
    capital: [
        "Sarajevo"
    ],
    region: "Europe",
    subregion: "Southeast Europe",
    languages: {
        "bos": "Bosnian",
        "hrv": "Croatian",
        "srp": "Serbian"
    },
    timezones: [
        "UTC+01:00"
    ],
    continents: [
        "Europe"
    ],
    flags: {
        "png": "https://flagcdn.com/w320/ba.png",
        "svg": "https://flagcdn.com/ba.svg",
    }
}
])

db.VisitedList.insertMany([{
		name: {
			common: "Bosnia and Herzegovina",
			official: "Bosnia and Herzegovina",
        },
		cca2: "BA",
		capital: [
			"Sarajevo"
		],
		region: "Europe",
		subregion: "Southeast Europe",
		languages: {
			"bos": "Bosnian",
			"hrv": "Croatian",
			"srp": "Serbian"
		},
		timezones: [
			"UTC+01:00"
		],
		continents: [
			"Europe"
		],
		flags: {
			"png": "https://flagcdn.com/w320/ba.png",
			"svg": "https://flagcdn.com/ba.svg",
		}
	}
])