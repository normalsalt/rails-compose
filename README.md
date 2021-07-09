# Ruby on Rails development environment with Docker Compose

## Quickstart

https://docs.docker.com/samples/rails/

```
% docker-compose up -d --build
% docker-compose run --rm web rails db:create
```

Go to http://localhost:3000 on a web browser to see the Rails Welcome.

### Ruby

https://www.ruby-lang.org/en/downloads/releases/

### Ruby on Rails

https://weblog.rubyonrails.org/releases/

### PostgreSQL

https://hub.docker.com/_/postgres

## Example

https://guides.rubyonrails.org/command_line.html

### generate

```
% docker-compose run --rm web rails g controller Greetings hello --no-helper --no-assets
```

Go to http://localhost:3000/greetings/hello on a web browser.

### destroy

```
% docker-compose run --rm web rails d controller Greetings
% git restore config/routes.rb
```

### yarn

```
% docker-compose run --rm web yarn add bootstrap
% docker-compose run --rm web yarn add @popperjs/core
% docker-compose run --rm web yarn add bootstrap-icons
```

## Bootstrap

https://getbootstrap.com/docs/versions/

### bootstrap.scss

https://github.com/twbs/bootstrap/blob/main/scss/bootstrap.scss

### Bootstrap Icons

https://icons.getbootstrap.com/
