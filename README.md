# README

This assignment is created in Ruby on Rails using webpack React. 

* Ruby version 

  2.6.0

* System dependencies:

  Postgresql
  
  NodeJS 
  
  Yarn
  
* Gems used:

  json: To read the json file
  
  active_model_serializers: To serialize the attributes 
  
  rubocop: To follow the ruby best practices 
  
  pg: For postgresql database
  
  rspec-rails: For unit testing
  
* Database:

  Postgresql database is used. Install and setup postgresql and update the username and password in `config/database.yml` 

* Configuration:

  To install NodeJS, run `sudo apt-get install nodejs`
  
  To install Yarn, run `sudo apt install yarn`
  
* Setup:

  1. Clone the repository
  
  2. `bundle install`
  
  If you get error like "Your Yarn packages are out of date!" then run below command.
  `yarn install --check-files` 

* Database initialization:

  1. Go to root directory
  
  1. `rake db:create`
  
  2. `rake db:migrate`
  
  3. `rake db:seed`

* Start the server:

  1. Go to root directory and run command `rails s`
  
  2. Open the url "http://localhost:3000" in the browser

* How to run the test suite

  1. To run rubocop, Go to root directory and run command `rubocop`
  2. To run the unit test, Go to root directory and run `rspec spec`

