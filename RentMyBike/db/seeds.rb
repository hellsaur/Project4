# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



victor = User.create!(name:'Victor', last_name: 'Reynosa', user_type:'renter', username: 'Areynosa', password: 'password', phone_number: '917-543-5423', email: 'elrey@gmail.com')
kareem = User.create!(name:'Kareem', last_name: 'James',  user_type:'lender', username: 'punion' , password: 'password', phone_number: '917-343-5423', email: 'union_me@hotmail.com')
abrian = User.create!(name:'Abrian', last_name: 'Couto',  user_type:'lender', username: 'dtroll', password: 'password', phone_number: '646-513-5763', email: 'a_him@gmail.com')
olivia = User.create!(name:'Olivia', last_name: 'Stoick', user_type:'renter', username: 'i1234', password: 'password', phone_number: '121-543-5023', email: 'mami14@gmail.com')
aaron = User.create!(name:'Aaron', last_name: 'Addison', user_type:'lender', username: 'bigB', password: 'password', phone_number: '212-123-5223', email: 'aadisson@gmail.com')
osman = User.create!(name:'Osman', last_name: 'Emara', user_type:'renter', username: 'bk121', password: 'password', phone_number: '646-503-5409', email: 'osman@gmail.com')
alex = User.create!(name:'Alex', last_name: 'Kibler', user_type:'lender', username: 'k1bler', password: 'password', phone_number: '917-473-5123', email: 'k1bler@gmail.com')
kai = User.create!(name:'Kai', last_name: 'Zhang', user_type:'renter', username: 'Kaizen', password: 'password', phone_number: '123-503-9723', email: 'kaizen@gmail.com')
josue = User.create!(name:'Josue', last_name: 'Perez', user_type:'lender', username: 'labamba', password: 'password', phone_number: '646-567-5023', email: 'Jperez@gmail.com')


#Bike

Bike.create!(user: victor, image: 'https://drive.google.com/open?id=1tTUfitCRtVH9uMKV7fmNcjYRkjQjR71y', model: 'BMX', color: 'black', condition:'used')
Bike.create!(user: kareem, image: 'https://drive.google.com/open?id=1ErcbzuIDhMm7qNFM5vL9cX-nQ5nKuUJG', model: 'Mountain Bike', color: 'black and orange', condition:'brand new')
Bike.create!(user: abrian, image: 'https://drive.google.com/open?id=10givTq81bWLvqedU-eRUl9PMKnGrXspP', model: 'BMX', color: 'white', condition:'used')
Bike.create!(user: olivia, image: 'https://drive.google.com/open?id=1bO7OByjzyQYStXvOYohA9uHYKq3YsMXG', model: 'Mountain Bike', color: 'dark blue', condition:'new')
Bike.create!(user: aaron, image: 'https://drive.google.com/open?id=1og-7da2f7P_iaWUxDMLTXKDdFHjOGT_z', model: 'Cyclo-Cross', color: 'black and red', condition:'used')
Bike.create!(user: osman, image: 'https://drive.google.com/open?id=1zM24G1VKevzVI0evLsZqL3HKqdBlhurL', model: 'Hybrid', color: 'gray', condition:'used twice')
Bike.create!(user: alex, image: 'https://drive.google.com/open?id=1oS6Zf2wNi2J-Ty86HlsiWv8SCF4mEtnj', model: 'BMX', color: 'brown', condition:'used')
Bike.create!(user: kai, image: 'https://drive.google.com/open?id=1UtII8vecOmOiF1xSpt4zaK6Zto7bmFHj', model: 'Mountain Bike', color: 'red', condition:'used')
Bike.create!(user: josue, image: 'https://drive.google.com/open?id=1TeNC7KAICJoQDbsjFJCJdkgi74GCtgRG', model: 'Mountain Bike', color: 'blue', condition:'used')
