# Express.js: Improper Input Validation Vulnerability

This repository demonstrates a common vulnerability in Express.js applications: improper input validation in a POST route.  The vulnerability allows attackers to submit malicious data that could lead to unexpected behavior or errors in the application.

## Vulnerability

The `bug.js` file contains an Express.js application with a POST route `/users`.  This route accepts user data in the request body.  However, the code lacks proper input validation, making it vulnerable to attacks that exploit improper input validation.

## Solution

The `bugSolution.js` file provides a secure version of the code that addresses the vulnerability by adding input validation. This validation helps prevent malicious data from causing issues.

## How to run the examples

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to run the vulnerable application, then test it with `curl -X POST -H "Content-Type: application/json" -d '{"name":"test","age":30}' http://localhost:3000/users`.
5. Run `node bugSolution.js` to run the secure application, then test it with the same curl command.

## Disclaimer

This example demonstrates a common vulnerability to help developers learn and improve their security practices.  Always perform thorough input validation to protect your applications from various types of attacks.