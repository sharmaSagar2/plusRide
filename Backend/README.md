# User Registration API

## Endpoint
`POST /users/register`

### Description
This endpoint allows a new user to register by providing their personal information, including their full name, email, and password. Upon successful registration, the server will respond with the user's information and an authentication token.

### Request Body
The request body must be in JSON format and should include the following fields:

- `fullname`: An object containing the user's full name.
  - `firstname`: (String) The first name of the user. Must be at least 3 characters long.
  - `lastname`: (String) The last name of the user. Must be at least 3 characters long.
  
- `email`: (String) The email address of the user. Must be a valid email format and at least 6 characters long.
  
- `password`: (String) The password for the user account. Must be at least 5 characters long.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```


## Responses
### 201 Created:

#### Description: 
The user has been successfully registered.
`Response:`
```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  },
  "token": "JWT_TOKEN"
}
```

# 400 Bad Request

### Description: 
The request has validation errors. This response will include details about the validation errors.
`Response Body:`
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint Documentation

## Endpoint
`POST /users/login`

## Description
The `users/login` endpoint is used for authenticating users in the application. It accepts user credentials (email and password) and returns a JSON Web Token (JWT) if the credentials are valid. This token can be used for subsequent requests that require authentication.

## Request Body
The request must be sent as a JSON object with the following structure:

```json
{
    "email": "user@example.com",
    "password": "yourpassword"
}
```
## Required Fields
`email` (string): The email address of the user. It must be a valid email format.
`password` (string): The password of the user. It must be at least 5 characters long.


## Response
### Success Response
#### Status Code: `200 OK`
#### Content:
```json
{
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "user@example.com",
        "socketId": "optionalSocketId"
    },
    "token": "your_jwt_token"
}
```

## Error Responses
### Status Code: `400 Bad Request`
#### Content:
```json
{
    "errors": [
        {
            "msg": "Please enter a valid email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 5 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```
### Status Code: `401 Unauthorized`

#### Content:
```json
{
    "error": "Invalid email or password"
}
```

## Example Request
```json
curl -X POST http://yourapi.com/users/login \
-"Content-Type: application/json" \
'{
    "email": "user@example.com",
    "password": "yourpassword"
}'
```

