-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
* 
from category c
join product p
    on c.id = p.categoryId
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select 
    o.id,
    o.OrderDate,
    s.CompanyName
from [order] o
join shipper s
    on s.id = o.ShipVia
where o.OrderDate < date('2012-08-09');
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select 
    p.ProductName,
    o.Quantity
from OrderDetail as o
join product p
    on p.Id = o.ProductId
where o.orderId = 10251;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select 
    o.Id OrderId,
    c.CompanyName CompanyName,
    e.LastName EmployeeLastName
from [order] o
join customer c 
    on c.Id = o.CustomerId
join employee e
    on e.Id = o.EmployeeId