1. Create a nerw route file called Students
2. the data should be:

let students = [
    {id:1, name:'Omer', course:'DevOps'},
    {id:2, name:'Dan', course:'BI'},
    {id:3, name:'Ariel', course:'Fullstack'},
    ]

3) build this routes
GET /students
GET /students/:id
GET /students/search?course=React
POST /students
DELETE /students/:id

4) connect the routes to app.js

const studentsRoutes = require("./routes/students.routes");
app.use("/students", studentsRoutes);