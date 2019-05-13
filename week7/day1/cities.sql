
-- this is how we do comments in SQL

-- DROP MEANS DELETE
-- This deletes the cities table if it already exits and writes over it
DROP TABLE if EXISTS cities;


-- Create table
CREATE TABLE cities(
    -- Postgrs dinamically sets an ID as it is listed as SERIAL PRIMARY KEY
    id SERIAL PRIMARY KEY,
    -- VARCHAR is its DATA TYPE
    -- NOT NULL means a value is needed to create the row
    city VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    population INTEGER
);

-- Command to create the table "psql cities -f cities.sql"
-- psql cities -f cities.sql
-- once in the table Command to view the table "cities=# \dt"

-- Create data in a table
-- Creates a new ROW in our table
-- INSERT INTO name_of_table(col1, col2, col3)
-- VALUES (val1, val2, val3)


INSERT INTO cities(city ,country ,population)
VALUES ('BERLIN', 'DE', 3000000);

INSERT INTO cities(city ,country ,population)
VALUES ('New York', 'USA', 9000000 );

INSERT INTO cities(city ,country)
VALUES ('Chesterfield', 'UK');


-- TO READ from a database

-- SELECT means you select and read the contents of a table
-- SELECT col1, col2 FROM name_of_table;
SELECT city, country FROM cities;

-- To read everything
SELECT * FROM cities;

-- A where clause will specify a row or a series of rows to show us
SELECT * FROM cities WHERE country = 'DE';

-- Updating a row that lready exists is our table
UPDATE cities 
SET population = 2000000 
WHERE id = '3';

SELECT * FROM cities;

-- To Delete items

DELETE FROM cities WHERE city = 'New York';

SELECT * FROM cities;

-- <> means Not euqal to
DELETE FROM cities WHERE country <> 'DE';

SELECT * FROM cities;

