# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.delete_all
Bench.create(description: "Stone Bench", seats: 4, lat:37.7697842, lng: -122.4700492)
Bench.create(description: "Long Bench", seats: 10, lat:37.784543, lng:-122.4020615)
Bench.create(description: "Green Bench", seats: 5, lat:37.8010969, lng:-122.4096658)

User.delete_all
User.create(username: "test", password: "hunter2")
User.create(username: "admin", password: "admin")