# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



victor = Lender.create!(name:'Victor', last_name: 'Reynosa', username: 'Areynosa', phone_number: '917-543-5423', email: 'elrey@gmail.com')
kareem = Lender.create!(name:'Kareem', last_name: 'James', username: 'punion', phone_number: '917-543-5423', email: 'union_me@hotmail.com')
abrian = Lender.create!(name:'Abrian', last_name: 'Couto', username: 'dtroll', phone_number: '646-513-5763', email: 'a_him@gmail.com')
olivia = Lender.create!(name:'Olivia', last_name: 'Stoick', username: 'insther1234', phone_number: '121-543-5023', email: 'mami14@gmail.com')
aaron  = Lender.create!(name:'Aaron', last_name: 'Addison', username: 'bigB', phone_number: '212-123-5223', email: 'aadisson@gmail.com')
osman  = Lender.create!(name:'Osman', last_name: 'Emara', username: 'bk121', phone_number: '646-503-5409', email: 'osman@gmail.com')
alex   = Lender.create!(name:'Alex', last_name: 'Kibler', username: 'k1bler', phone_number: '917-473-5123', email: 'k1bler@gmail.com')
kai    = Lender.create!(name:'Kai', last_name: 'Zhang', username: 'Kaizen', phone_number: '123-503-9723', email: 'kaizen@gmail.com')
josue  = Lender.create!(name:'Josue', last_name: 'Perez', username: 'labamba', phone_number: '646-567-5023', email: 'Jperez@gmail.com')


#Renter

Renter.create!(name:'Anna', last_name: 'Reynosa', username: 'Areynosa', phone_number: '917-543-8423', email: 'ar@gmail.com')
Renter.create!(name:'Kim', last_name: 'James', username: 'kayjay', phone_number: '917-443-5223', email: 'kay-jay@hotmail.com')
Renter.create!(name:'Amanda', last_name: 'Couto', username: 'dtroll', phone_number: '646-513-5763', email: 'a_her@gmail.com')
Renter.create!(name:'Steven', last_name: 'Stoick', username: 'insther1234', phone_number: '121-543-5023', email: 'mami14@gmail.com')
Renter.create!(name:'Alejandro', last_name: 'Addison', username: 'bigB', phone_number: '212-123-5223', email: 'aadisson@gmail.com')
Renter.create!(name:'Oscar', last_name: 'Emara', username: 'emmamora', phone_number: '646-503-5409', email: 'moran@gmail.com')
Renter.create!(name:'Alicia', last_name: 'Acosta', username: 'aacosta', phone_number: '917-473-5123', email: 'costa@gmail.com')
Renter.create!(name:'Cherry', last_name: 'Chen', username: 'CChen', phone_number: '153-501-9753', email: 'cc@gmail.com')
Renter.create!(name:'Dan', last_name: 'Lev', username: 'labamba', phone_number: '646-567-5323', email: 'bamba91@gmail.com')

#Bike

Bike.create!(lender: victor, image: 'https://drive.google.com/open?id=1tTUfitCRtVH9uMKV7fmNcjYRkjQjR71y', model: 'BMX', color: 'black', condition:'used')
Bike.create!(lender: kareem, image: 'https://drive.google.com/open?id=1ErcbzuIDhMm7qNFM5vL9cX-nQ5nKuUJG', model: 'Mountain Bike', color: 'black and orange', condition:'brand new')
Bike.create!(lender: abrian, image: 'https://drive.google.com/open?id=10givTq81bWLvqedU-eRUl9PMKnGrXspP', model: 'BMX', color: 'white', condition:'used')
Bike.create!(lender: olivia, image: 'https://drive.google.com/open?id=1bO7OByjzyQYStXvOYohA9uHYKq3YsMXG', model: 'Mountain Bike', color: 'dark blue', condition:'new')
Bike.create!(lender: aaron, image: 'https://drive.google.com/open?id=1og-7da2f7P_iaWUxDMLTXKDdFHjOGT_z', model: 'Cyclo-Cross', color: 'black and red', condition:'used')
Bike.create!(lender: osman, image: 'https://drive.google.com/open?id=1zM24G1VKevzVI0evLsZqL3HKqdBlhurL', model: 'Hybrid', color: 'gray', condition:'used twice')
Bike.create!(lender: alex, image: 'https://drive.google.com/open?id=1oS6Zf2wNi2J-Ty86HlsiWv8SCF4mEtnj', model: 'BMX', color: 'brown', condition:'used')
Bike.create!(lender: kai, image: 'https://drive.google.com/open?id=1UtII8vecOmOiF1xSpt4zaK6Zto7bmFHj', model: 'Mountain Bike', color: 'red', condition:'used')
Bike.create!(lender: josue, image: 'https://drive.google.com/open?id=1TeNC7KAICJoQDbsjFJCJdkgi74GCtgRG', model: 'Mountain Bike', color: 'blue', condition:'used')
