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

Bike.create!(user: victor, image: 'http://www.99bikes.com.au/media/catalog/product/cache/1/image/780x680/9df78eab33525d08d6e5fb8d27136e95/1/9/199784.png', model: 'BMX', color: 'black', condition:'used')
Bike.create!(user: kareem, image: 'https://drive.google.com/open?id=1ErcbzuIDhMm7qNFM5vL9cX-nQ5nKuUJG', model: 'Mountain Bike', color: 'black and orange', condition:'brand new')
Bike.create!(user: abrian, image: 'http://www.mongoose.com/media/catalog/product/m/1/m13_SUB20_slv_5.1348673611.png', model: 'BMX', color: 'white', condition:'used')
Bike.create!(user: olivia, image: 'https://www.mountainbicycleworld.com/wp-content/uploads/2017/09/GMC-Topkick-Bike.png', model: 'Mountain Bike', color: 'dark blue', condition:'new')
Bike.create!(user: aaron, image: 'http://www.francebikerentals.com/sites/default/files/2016-11/Portofolio_Dual_600_1.png', model: 'Cyclo-Cross', color: 'black and red', condition:'used')
Bike.create!(user: osman, image: 'https://www.hookedoncycling.eu/wordpress/wp-content/uploads/2016/10/Sub-Cross-Lady-40-640x425.png', model: 'Hybrid', color: 'gray', condition:'used twice')
Bike.create!(user: alex, image: 'http://www.mongoose.com/media/catalog/product/m/1/m13_CHA20_fir_9.1348673432.png', model: 'BMX', color: 'brown', condition:'used')
Bike.create!(user: kai, image: 'https://ytmedia.azureedge.net/image/fb/7d/ea/Jeffsy29_CF_PRO_red_seite_Frei1_720x600.png', model: 'Mountain Bike', color: 'red', condition:'used')
Bike.create!(user: josue, image: 'https://youngbloodbikes.com/wp-content/uploads/2016/08/Yetibike1bComp.png', model: 'Mountain Bike', color: 'blue', condition:'used')
