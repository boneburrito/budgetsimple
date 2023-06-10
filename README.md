# budgetsimple


## Getting Started

#### You need the following:
1. [Python3](https://www.python.org/downloads/)
2. [PostgreSQL](https://www.postgresql.org/download/)
3. [Virtualenv](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/)

#### Initial setup
1. Clone the repo
2. Create a virtual environment: `virtualenv venv`
3. Activate the virtual environment: `source venv/bin/activate`
4. install the requirements with: `pip install -r requirements.txt`


#### Start the Postgres shell
1. Start the Posgtgres shell with `psql postgres` from the command line
2. Create a user with: `CREATE USER <yourNameHere> WITH PASSWORD '<yourPasswordHere>';`
	1. Save your password securely (use an environement variable or password manager)
3. Alter these connections params:
	`ALTER ROLE <yourNameHere> SET client_encoding TO 'utf8';`
	`ALTER ROLE <yourNameHere> SET default_transaction_isolation TO 'read committed';`
	`ALTER ROLE <yourNameHere> SET timezone TO 'UTC';`
4. Grant your user access to the database: `bonedate`: `GRANT ALL PRIVILEGES ON DATABASE bonedata TO <yourNameHere>;`

#### Extra
1. The makemigrations command is responsible for creating new migrations based on the changes you have made to our models: `python manage.py makemigrations`
2. The migrate command will execute SQL commands: `python manage.py migrate`	
3. To get a better understanding of what this command does, check out this article [Django Migrations: A Primer](https://realpython.com/django-migrations-a-primer/)
4. Start the server by running this command: `python manage.py runserver`
5. After running the command above, proceed to visit [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

