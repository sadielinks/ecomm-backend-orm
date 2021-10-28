# E-Commerce Back End (Bootcamp Assignment 13 - ORM)

By: Sadie Sial

___

![mit](https://img.shields.io/badge/license-MIT-lightblue)

#### Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Links](#links)
* [Contact](#contact)
* [License](#license)
<br><br>

## Description <br>

This is an application that allows the user to utilize a back-ended e-commerce site through Express.js API and Sequelize. These technologies interact with the website's MySQL database.


### User Story:

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

1. Users will need to use `git clone` to clone this repo into their local drive.

- HTTPS
```
https://github.com/sadielinks/ecomm-backend-orm.git
```
- SSH
```
git@github.com:sadielinks/ecomm-backend-orm.git
```

2. They will then need to install `npm i` into their command line in the repository's root folder.


## Usage

1. After the installation process, users will then need to enter their schema using MySQL:

```
mysql -u root -p
```

2. Next, the seeds will need to be entered as well using:

```
node seeds/index.js
```

3. Once the console displays that the database has synched and the products, tags, and product tags have all been seeded they will need to invoke the application by starting their server using:

```
nodemon server.js
```

4. As this application is not deployed, users will then need to naviagate to Insomnia Core.



## Technologies

The technologies used to create this program were: 
- Javascript
- Node.JS - Express.JS
- Sequelize ORM
- MySQL
<br><br>

## Screenshots
```

```
![Screenshot](assests/images/screenshot.png)

```

```
![Screenshot](assests/images/screenshot2.png)

```

```


<br>

## Links

- [Link]()

- [Google Drive](https://drive.google.com/drive/folders/1Q73SY0TiaKR0SS1sHMcOjcV2U-SoDEEh?usp=sharing)

- [GitHub Repository](https://github.com/sadielinks/employee-tracker-sql)

<br>

## Contact

- [GitHub Profile](https://github.com/sadielinks)
- [Portfolio](https://sadielinks.github.io/professional-portfolio/)
- [Email](mailto:sadiecodes@gmail.com)

<br>

## License

This source code is available to everyone under the standard [MIT license ©](https://choosealicense.com/licenses/mit/) <br><br>
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.