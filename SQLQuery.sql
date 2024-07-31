CREATE DATABASE shoppingListDB;

USE shoppingListDB;

CREATE TABLE Categories (
    id INT PRIMARY KEY IDENTITY(1,1),
    category_name VARCHAR(20) NOT NULL,
);

CREATE TABLE Items (
    id INT PRIMARY KEY IDENTITY(1,1),
    category_id INT FOREIGN KEY REFERENCES Categories(id) NOT NULL,
    item_name VARCHAR(50) NOT NULL,
	amount INT
);

INSERT INTO Categories
VALUES
    ('מוצרי ניקיון'),
	('גבינות'),
	('ירקות ופירות'),
	('בשר ודגים'),
    ('מאפים');