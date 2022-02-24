# Art Gallery

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

#### SoftUni - JS Back-end - Exam Retake 2021

## Used in this project:

- Provided HTML & CSS resources 
- You may add attributes (such as class and dataset), but it is forbidden to change existing attributes (such as class and id)
- You may change "href" attributes on links and add/change the method and action attributes of HTML Forms.
- **Express.js** as a back-end framework
- **MongoDB** as a database with **mongoose**
- **Express-handlebars** as a template
- **Bcrypt** for hashing the password
- Application must start from file "index.js" on port 3000
- It is forbidden to use React, Vue, Angular, etc.

## Start:
- `$ git clone https://github.com/yveette/Art-Gallery`
- `npm install`
- `npm run start`
- open http://localhost:3000
- can use the GUI for MongoDB -> [MongoDB Compass](https://www.mongodb.com/products/compass)
- enjoy

## Users:

* Users (Logged In)
    * View ArtGallery (**home page**) and all other pages with logged-in navigation
    * View Gallery (**catalog page**)
    * **Create** new publication [Create Publication]
    * Access publication **details** page [Details]
    * **Share** publication (if the current user is not the author of the publication)
    * **Delete** or **Edit** publication depending on user's authentication (only for the author of the current publication)
    * Can access **Logout** functionality.

* Guest (Not Logged In)
    * Can access **Home** page of ArtGallery.
    * Can access **Catalog** Gallery (all publications)
    * Can access **Details** page.
    * Can access **Login** page and functionality.
    * Can access **Register** page and functionality.

## Database Models
*Note: You can add additional properties to the models if this will help you solve the task.*

### User:

- Username - string (required),
- Password - string (required),
- Address - string (required),
- My Publications - a collection of  Publication (a reference to the Publication Model)
*Note: When a user creates a new publication, a reference to that publication is added to that collection (My Publications).*

### Hotel:

- Title - string (required),
- Painting technique - string (required),
- Art picture - string (required),
- Certificate of authenticity - string ("Yes", "No") required,
- Author - object Id (a reference to the User model),
- Users Shared - a collection of Users (a reference to the User model)
*Note: When a user shares a given publication, their id is added to that collection (Users Shared).*

## Application Pages

### Home Page - ArtGallery 

Preview **all publications** and **user activity statistics**. Each publication should display information about the **title**, and the **number of people shared** the publication, as well as the [View publication] button that leads to the details page for the specific publication.

![Home Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/home_page.png)

If there are NO publications yet, show the following view:

![Home Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/home_page_not_found.png)

### Register Page (Logged Out User)  

Register a user inside the database with **username**, **password**, and **address**. Password inside the database must be **hashed** (use **bcrypt**) and both passwords must match! After successful registration redirects to the **ArtGallery** (home page), with an already logged-in user.

![Register Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/register_page.png)


### Login Page (Logged Out User)  

Logging an already registered user with the correct **username** and **password**. After successful login redirects to the **ArtGallery** (home page), with an already logged-in user.

![Login Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/login_page.png)

### Logout Page (Logged in user)  

The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the **ArtGallery** (home page).

### Gallery (for logged in users and logged out users)

List of all **art publications**. Each publication should display information about the **art picture**, the **title**, the **certificate** of authenticity, as well as the [Details] button that leads to the details page for the specific publication. Like in the picture below:

![Gallery Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/gallery_page.png)

[Details] button should be a link to the details page for the current publication.
If there are no art publications in the database, display : 
"No publications created yet! [Create publication]"

### Details Page - (for logged in users and logged out users)

All users should be able to view details about the publication. Clicking the Details button in a publication card should display the Details page. If the currently logged-in user is the author of the publication, the Edit and Delete buttons should be displayed, otherwise they should not be available.
Information about the publication:
- Title
- Author
- Painting technique
- Certificate of authenticity
- Buttons (Depending on the status of the currently logged in user)

<details>
    <summary>Details Page (logged out users)</summary>
If there are no logged-in users, no buttons should be displayed.

![Details Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/details_1.png)
</details>

<details>
    <summary>Details Page (logged in user and author of the current publication)</summary>
If the currently logged-in user is the author (the user who created the art publication), he should see the [Edit] and [Delete] buttons.

![Details Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/details_2.png)
</details>

<details>
    <summary>Details Page (logged in user who did not share publication)</summary>
If the currently logged-in user is not the author (the user that is not the creator for that publication) and has not shared this publication, he should see the [Share publication] button.

*Note: In the photo shown, the [Share publication] button is not pressed, and the photo below (from the ArtGallery page) shows that there are no users who have shared the publication yet.*

![Details Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/details_3.png)
</details>

<details>
    <summary>Details Page (logged in and has already shared a publication)</summary>
If the currently logged-in user is not the author and has already shared a current publication, he should see the paragraph [You already shared this publication].

![Details Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/details_4.png)
</details>

### Share publication (logged in user who is not the author of the publication)

Any registered user who is not the author of the art publication must be able to **share** it (if he has not already shared it). 
If it is successfully shared, the userId of the user must be **added to the collection of Users Shared**.
Then redirect the user to **ArtGallery** (home page), where they should see the updated value of a **number** of people shared the publication for the current publication, and it will be **incremented by one**. *(See the reflected changes for the publication in the section "Shared Post Statistics").*
If a user has shared a current publication, he should see the paragraph *"You already shared this publication"*.

### Create Publication Page (logged in user)

The Create page is available to logged-in users. It contains a form for adding new art publications. Upon success, redirect the user to the **Gallery page** (all art publications).

![Create Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/create_page.png)

### Delete Publication (logged in user and author of the current publication) 

Every author should be able to click over the [Delete] button - deleting the current publication from the database and the user should be redirected to the **Gallery page** (all art publications).

### Edit Publication (logged in user and author of the current publication)

The Edit page is available to logged-in users and it allows authors to edit their publications. Clicking the [Edit] button of a particular publication on the Details page should display the Edit page, with all fields filled with the data for the publication. It contains a form with input fields for all relevant properties. Upon success, redirect the user to the Details page for the current publication.

![Edit Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/edit_page.png)

### Profile Page - Bonus

Each logged-in user should be able to view their full profile information by clicking [Profile]. Username, address, titles of shared posts by the user (which the current user has shared), and the titles of which the user is the author with current user data must be completed.
If there are shared or own publications from the current user, separate their titles with a comma and a space (, ).
Otherwise, if there are no shared or own publications yet, the message *"Not yet."* should be visualized.

![Profile Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/profile_page.png)

### Profile Page - Bonus

If Guests (not logged in) trying to access а page that it should not be able to, you must redirect them to the Login page.
If Users (logged in) trying to access а page that it should not be able to, you must redirect them to the ArtGallery.
Use the following view for invalid paths:

![404 Page View](https://github.com/yveette/Art-Gallery/blob/main/readme_files/not_found_page.png)

## Validation and Error Handling

The application should **notify** the users about the result of their actions.
In case of **error**, you should display div with class "**error-box**".
You can choose to display the first error or all of them. You have complete freedom to choose the content of the error message you will display.

### Login / Register
- The **username** should be **at least 4 characters long**
- The **password** should be **at least 3 characters long**
- The **repeat password** should be **equal** to the password
- The **address** should be a **maximum of 20 characters long**

### Publication
- The **Title** should be a **minimum of 6 characters long**.
- The **Painting** technique should be a **maximum of 15 characters long**.
- The **Certificate** of authenticity there must be value "**Yes**" or "**No**".
- The **Art picture** should start with **http://** or **https://**.

## Security Requirements

The Security Requirements are mainly access requirements. Configurations about which users can access specific functionalities and pages.

### Guest (not logged in):
- users can access the **ArtGallery** (home page).
- users can access the **Login** page and functionality.
- users can access the **Register** page and functionality.
- can access Gallery (listed all publications).
- can access the Details page without functionality.

### Users (logged in):
- can access **Home** page page and functionality.
- can access **Details** page and functionality.
- can access **Create** Publication page and functionality.
- can access to **Share** Publication functionality.
- can **Edit** and **Delete** the current publication. (publication creator)
- can access **Gallery** (listed all publications).
- can access **Logout** functionality.