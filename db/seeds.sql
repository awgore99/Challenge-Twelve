INSERT INTO department (name)
VALUES 
('IT'),
('Finance'),
('Accounting'),
('Operations'),
('Marketing'),
('Management');

INSERT INTO role (title, pay, department_id)
VALUES
('Full Stack Dev', 60000, 1),
('Software Engineer', 150000, 1),
('CFO', 500000, 2), 
('Senior Accountant', 200000, 3),
('Supply Chain Manager', 100000, 4), 
('Floor Manager', 90000, 4),
('District Manager', 120000, 5),
('CEO', 1000000, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Austin', 'Gore', 1),
('James', 'Cameron', 8),
('Elon', 'Musk', 3),
('Tom', 'Tucker', 6),
('Stewie', 'Griffin', 5),
('Tom', 'Gore', 2),
('Adrian', 'Peterson', 7),
('Josh', 'Allen', 4);