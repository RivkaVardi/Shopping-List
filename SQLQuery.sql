CREATE DATABASE shoppingList;

USE shoppingList;

CREATE TABLE Categories (
    id INT PRIMARY KEY IDENTITY(1,1),
    category_name VARCHAR(20),
);

CREATE TABLE Items (
    id INT PRIMARY KEY IDENTITY(1,1),
    category_id INT FOREIGN KEY REFERENCES Categories(id),
    item_name VARCHAR(50),
	amount INT
);

INSERT INTO Categories
VALUES
    ('מוצרי ניקיון'),
	('גבינות'),
	('ירקות ופירות'),
	('בשר ודגים'),
    ('מאפים');
