# warshetak

A web system for a car-service client that aims to help the client to request service without having to reach the workshop themself.

## Contents

- [Usage](#Usage)
- [Installation](#Installation)
- [Dependencies](#Dependencies)
- [Support](#Support)
- [Roadmap](#Roadmap)

## Usage

The system recieves a request from the interface that the client deal with using RESTful API and sends the data provided by the client to the admin through email.

## Installation

- Install dependencies

```bash
    $ cd <directory name>
    $ npm install
```

- create your config.js file and place it in the main folder of the directory it should be something like theat:

```javascript
const email = {
  host: "your hosting localhost in case of hosting localy",
  mail: "your email",
  pass: "your password",
};
module.exports = email;
```

- run the project
- In case of using gmail you should allow on weak security apps form [settings](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwi09tXm3NLvAhXxSBUIHYaCCkkQFjAEegQIAhAD&url=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps&usg=AOvVaw3FH1O5TwzTEB9B9yhEUsI7)

```bash
    $ npm test
```

## Dependencies

- [nodemailer version 6.4.17](https://github.com/nodemailer/nodemailer)
- [body-parser version 1.19.0](https://www.npmjs.com/package/body-parser)

## Support

To submit an issue you can add an issue at the [Repository](https://github.com/mohamedtaarek/warshetak/issues) or send an [email](mailto:mohamed.taarek22@gmail.com)

## Roadmap

It is planned to create an admin internal system to help the adminstrator to handle orders either online requests or workshop clients
