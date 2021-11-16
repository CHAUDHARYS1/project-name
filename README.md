# want-a-job?

### Requirements:
Use React for the front end.

Use GraphQL with a Node.js and Express.js server.

Use MongoDB and the Mongoose ODM for the database.

Use queries and mutations for retrieving, adding, updating, and deleting data.

Be deployed using Heroku (with data).

Have a polished UI.

Be responsive.

Be interactive (i.e., accept and respond to user input).

Include authentication (JWT).

Protect sensitive API key information on the server.

Have a clean repository that meets quality coding standards (file structure, naming conventions, best practices for class and id naming conventions, indentation, quality comments, etc.).

Have a high-quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

### features
Employers 
- Create, Read, Update and Delete job listing

Users
Search for job listing based on position title
Being able to read job listing 
Apply to job
Do not have to login to apply

Payment
Memebership option for employeers
Tiers of payment
    Basic Plan $99.00 
    Unlimited Plan $499.00
    Executive Plan $999.00

### technology
- React
- Semantic UI (front end framework)
- GraphQl 
- Apollo
- MongoDB
- Mongoose
- Node
- Stripe
- JWT Decode
- Express

### bonus
Although this is not a requirement for your project, see if you can also implement functionality to meet the minimum requirements of a PWA:

- Uses a web manifest
- Uses a service worker for offline functionality
- Is installable

### future enhancement
- Tracking existing application 
- Customize their profile 
- Application history
- Multiple Payment options (employers)
- Upload profile pic
- Dashboard for users/employers

### Responsiblities

Connor
    - Front end (React & Semantic) 

Jaya 
    - Payment (Stripe)
    - Backend (GraphQL and Apollo Server)

Shital
    - To work with Connor on the front end
    - To work with Jaya on the back end 
    - To jump in wherever

______________________________________________
## Front-end
### Pages needed 
- Home (list of all the jobs( title, company name, description with character limit, date posted) and search bar on top)
- Login (email and password && must include JWT) <!-- HTML COMPLETE >
- Signup (first name, last name, email, password, confirmPassword) <!-- HTML COMPLETE >
- Add a job list (Title*, Company name*, link to website, Date posted*, Type of role*(fulltime/contract/temp/part-time), Job description*, requirements*, benefits, salary, additional info)
- Payment Tier (3 columns -  Stripe)
- Single job listing (w/ apply btn - when user aplies > open modal, > redirect back to homepage)
- NoMatch 
### Components needed
- Footer
- Header
- JobList
- Navigation

### Utils
- auth.js
- mutations.js
- queries.js

______________________________________________
## Back-end
### Config
- config/connection.js
### Models 
- User
- Employeer
- Job

### Schemas
- resolvers
- typeDefs

### Seeders
- seeds

### utils
- auth
- dateFormat
