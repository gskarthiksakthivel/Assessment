# Account API For Existing Customer
___
### Spring Boot and ReactJS Application

---
This project provides to create account for existing customers.

### Summary
The assessment consists of an API to be used for opening a new “current account” of already existing
customers.

#### Requirements

• The API will expose an endpoint which accepts the user information (customerID,
initialCredit).

• Once the endpoint is called, a new account will be opened connected to the user whose ID is
customerID.

• Also, if initialCredit is not 0, a transaction will be sent to the new account.

• Another Endpoint will output the user information showing Name, Surname, balance, and
transactions of the accounts.
___
The application has 1 api
* AccountAPI

```html
POST /api/accounts - creates a new account for existing customer
GET /api/customers/{customerId} - retrieves a customer
GET /api/customer - retrieves all customers
```

JUnit test coverage is 100% as well as integration tests are available.


### Tech Stack

---
- Java 17
- Spring Boot
- Spring Data JPA
- Restful API
- OpenAPI documentation
- H2 In memory database  
- Docker
- Docker compose
- JUnit 5
- ReactJS for frontend

### Prerequisites

---
- Maven
- Docker

### Run & Build

---
There are 2 ways of run & build the application.

#### Docker Compose

For docker compose usage, docker images already push to docker.io

You just need to run `docker-compose up` command
___
*$PORT: 8080*
```ssh
$ cd Assessment
$ docker-compose up
```

#### Maven

For maven usage, you need to change `proxy` value in the `account-fe/package.json` 
file by `"http://localhost:8080"` due to the default value has been settled for docker image network proxy.
___
*$PORT: 8080*
```ssh
$ cd Assessment/account-api
$ mvn clean install
$ mvn spring-boot:run

$ cd Assessment/account-fe
$ npm install
$ npm start
```

### Swagger UI will be run on this url
`http://localhost:${PORT}/swagger-ui.html`