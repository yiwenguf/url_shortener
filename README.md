# url_shortener

Prerequisites
- Docker
- Node version 19.6.0

To setup MySQL db
- Ensure docker is installed
- Open terminal/cmd and go to /backend/mysql folder
- Enter these commands:
    - docker build -t link_shortener_db_yw .
    - docker run -p 3306:3306 link_shortener_db_yw
    
To run unit tests (Backend only, Unit test file is in /backend/src/api/tests)
- Open terminal/cmd in the project folder and go to /backend
- Enter command:
  - npm test

To start the backend
- Open terminal/cmd in the project folder and go to /backend
- npm start

To start the frontend
- Open terminal/cmd in the project folder and go to /frontend
- npm start
