# TBC x USAID 

პროექტი შედგება ერთგვერდიანი ვებსაიტისგან რომლის ასაწყობადაც გამოვიყენე React.js
ვებგვერდზე დაყოფილია სხვადასხვა სექციებად, როგორიცაა ნავიგაცა, ინფორმაციის განყოფილება, 
კურსების განყოფილება, სლაიდერი პარტნიორების ლოგოებისთვის, ხშირად დასმული კითხვების განყოფილება
და ბოლოს ფუტერი. ვებგვერდის კონტენტის გასასწილეად გამოყენებულია CSS-ის თანამედროვე მიდგომები,
როგორიცაა flexbox და grid. 

## Table of Contents

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)



## Structure


- node_modules
- public
  - favicon.ico
  - index.html
- src
  - assets - აქ განთავსებულია პროექტში გამოყენებული აიკონები
  - components - შეიცავს კომპონენტებს რომლებიც შაშლილია ცალკეულ დირექტორიებად, სადაც მოცემულია კომპონენტი და მისი css ფაილი
    - Navbar - კომპონენტის დირექტორია
        - index.css
        - Navbar.jsx
  - fonts - პროექტში გამოყენებული ფონტები
  - functions - დირექტორიაში განთავსებულია პროექტის დამხმარე ფუნქციები
  - images - დირექტორიაში მოცემულია ფროექტის სურათბი
  - state - დირექტორიაში აირს Context.js ფაილი რომელიც გამოყენებულია პროექტის კონტექსტისთვის
    - Context.js
  - App.js - რეაქტის მთავარი კომპონენტი
  - index.js - მთავარი ფაილი საიდანაც DOM-ზე რენდერდება კომპონენტები
  - index.css
  - reset.css 
- .gitignore
- package-lock.json
- package.json
- README.md


## Prerequisites

- Node.js installed
- Package Manager (npm or yarn)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Zeizvant/usaid.git
    ```

2. Navigate to the project directory:

    ```bash
    cd usaid
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Usage

To start the development server, run:

```bash
npm start
