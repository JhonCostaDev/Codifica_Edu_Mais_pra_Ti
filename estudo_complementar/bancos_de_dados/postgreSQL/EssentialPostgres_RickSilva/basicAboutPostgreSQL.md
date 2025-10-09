# PostgreSQL 

PostgreSQL is a powerful open-source relational database system (RDBMS) known for its robustness, extensibility, and  standards compliance. it's widely used in enterprise, academic, and startup environments.

## Key Features

* **ACID Compliance**: Ensures reliable transactions and data integrity.

* **SQL Standards**: Supports ANSI SQL and advanced features like window functions, CTEs, and full joins.

* **Extensibility**: You can define custom data types, operators, and functions.

* **Concurrency**: Uses Multi-Version Concurrency Control (MVCC) for high performance without locking.

* **Security**: Offers role-based access control, SSL, and encryption.

* **Replication**: Supports streaming replication and logical replication for high availability.

* **JSON Support**: Allows semi-structured data storage and querying.

* **PostGIS Extension**: Adds geospatial capabilities for GIS applications.

## How to install on linux/Unix

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

## Manager service

```bash
sudo systemctl start postgresql
sudo systemctl status postgresql
sudo systemctl enable postgresql
```

## Switch to the default PostgreSQL User
```bash
sudo -i -u postgres
```

## How to use comand line with psql

psql is the interactive command-line interface for PostgreSQL. It lets you connect to a PostgreSQL database, run SQL queries, manage users, and perform administrative tasks—all from your terminal.

### Connect to databases

```bash
psql -U user -d database
```

### Basic commands
```bash
\l # List all databases
\dt # List tables in the current database
\du # List roles (users)
\? # List all psql commands
\h # Get help on SQL syntax (\h SELECT)
```
### Redirect query output to a file

```bash
\o output.txt
SELECT * FROM users;
\o

# or csv

\o users.csv
\pset format csv
SELECT * FROM users;
\o

```