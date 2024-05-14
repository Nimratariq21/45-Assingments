function cities(city: string, country: string = "pakistan") {
    console.log(`${city} is in ${country}.`);
}

cities("Karachi");
cities("Islamabad");
cities("Tokyo", "Japan");