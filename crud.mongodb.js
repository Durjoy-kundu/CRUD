
//https://www.mongodb.com/docs/manual/reference/operator/query/
// crud operations

use("CrudDb");
console.log(db)
db.createCollection("courses")
// create
// db.courses.insertOne({
//     name: "Harry sigma",
//     price: 0,
//     assignment: 12,
//     projects: 4

// })

// db.courses.insertMany([
    
//         {
//           "name": "Sigma",
//           "price": 0,
//           "assignment": 2,
//           "projects": 4
//         },
//         {
//           "name": "React Pro",
//           "price": 2500,
//           "assignment": 10,
//           "projects": 3
//         },
//         {
//           "name": "Node.js Expert",
//           "price": 2000,
//           "assignment": 8,
//           "projects": 5
//         },
//         {
//           "name": "MERN Stack Bootcamp",
//           "price": 3500,
//           "assignment": 15,
//           "projects": 6
//         },
//         {
//           "name": "Python Essentials",
//           "price": 1800,
//           "assignment": 7,
//           "projects": 3
//         },
//         {
//           "name": "Java Fundamentals",
//           "price": 2200,
//           "assignment": 9,
//           "projects": 4
//         },
//         {
//           "name": "C++ Mastery",
//           "price": 2700,
//           "assignment": 11,
//           "projects": 5
//         },
//         {
//           "name": "SQL & Databases",
//           "price": 1900,
//           "assignment": 6,
//           "projects": 2
//         },
//         {
//           "name": "Django Web Development",
//           "price": 3000,
//           "assignment": 13,
//           "projects": 6
//         },
//         {
//           "name": "JavaScript Advanced",
//           "price": 2100,
//           "assignment": 10,
//           "projects": 4
//         }
      
      
// ])

// read

// let a = db.courses.find({price: 0})
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({price: 0})
// console.log(b)


//Update

// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price:{$gt:100}}, {$set:{price: 4500}})



// delete

db.courses.deleteOne({name: "Django Web Development" })

