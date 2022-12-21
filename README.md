# employee_system

To run the app:
1. download the project
2. database setup

To run the app, create a mysql database employee. The query is given as below:

create table employee(
   user_id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(100) NOT NULL,
   last_name VARCHAR(40) NOT NULL,
   salary INT NOT NULL,
   PRIMARY KEY ( Employee_id )
);

INSERT INTO employee(first_name,last_name,salary) values("Lewis","Burson",40700),("Ian", "Malcolm",70000),("Ellie","Sattler",102000),("Dennis","Nedry",52000),("John","Hammond",89600),("Ray","Arnold",45000),("Laura","Burnett",80000);

3. go to server and client folder, run npm install to install all required packages. After installing dependencies, go into server and run `npm run devStart` to trigger development of server side or `npm run start` to start the service. the port is 3001, if (http://localhost:3001/api/get show all employee information in the given json file, the backend end is running now. Go to client side and run `npm run start` and go to (http://localhost:3000). This page should show the app. The delete, update, add button is connected to backend and can delete, update, add employees.


