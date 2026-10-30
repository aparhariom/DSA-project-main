-- ========================================================
-- SMARTEXAM - RELATIONAL DATABASE SCHEMA (MySQL / PostgreSQL)
-- Complete schema for users, questions, exams, results, and proctoring.
-- ========================================================

CREATE DATABASE IF NOT EXISTS smartexam_db;
USE smartexam_db;

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('STUDENT', 'ADMIN') DEFAULT 'STUDENT',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. SUBJECTS TABLE
CREATE TABLE IF NOT EXISTS subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(20) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. QUESTIONS TABLE (CENTRAL QUESTION BANK)
CREATE TABLE IF NOT EXISTS questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    subject_id INT NOT NULL,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_option CHAR(1) NOT NULL, -- 'A', 'B', 'C', 'D'
    difficulty ENUM('Easy', 'Medium', 'Hard') DEFAULT 'Medium',
    marks INT DEFAULT 2,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- 4. EXAMINATIONS TABLE
CREATE TABLE IF NOT EXISTS exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    subject_id INT NOT NULL,
    duration_minutes INT NOT NULL DEFAULT 30,
    total_questions INT NOT NULL DEFAULT 15,
    pass_percentage INT NOT NULL DEFAULT 40,
    deadline DATETIME DEFAULT NULL,
    status ENUM('Active', 'Closed', 'Draft') DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

-- 5. EXAM SUBMISSIONS & PROCTORING AUDIT TABLE
CREATE TABLE IF NOT EXISTS exam_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    exam_id INT,
    user_id INT NOT NULL,
    score INT NOT NULL DEFAULT 0,
    total_marks INT NOT NULL DEFAULT 0,
    percentage DECIMAL(5,2) NOT NULL DEFAULT 0.00,
    status ENUM('Passed', 'Failed') NOT NULL,
    proctor_strikes INT DEFAULT 0,
    is_flagged BOOLEAN DEFAULT FALSE,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 6. PROCTORING INTEGRITY SNAPSHOTS TABLE
CREATE TABLE IF NOT EXISTS proctor_snapshots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NOT NULL,
    snapshot_label VARCHAR(100) NOT NULL,
    snapshot_type ENUM('checkin', 'periodic', 'violation', 'submission') DEFAULT 'periodic',
    image_data MEDIUMTEXT, -- Base64 data URI or Cloud Storage URL
    captured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (submission_id) REFERENCES exam_submissions(id) ON DELETE CASCADE
);

-- 6. SUBMISSION ANSWER BREAKDOWN
CREATE TABLE IF NOT EXISTS submission_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT NOT NULL,
    question_id INT NOT NULL,
    chosen_option CHAR(1),
    correct_option CHAR(1) NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    marks_awarded INT DEFAULT 0,
    FOREIGN KEY (submission_id) REFERENCES exam_submissions(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);

-- ========================================================
-- SEED DATA (INITIAL DATA POPULATION)
-- ========================================================

-- Insert Demo Users
INSERT INTO users (name, email, password_hash, role) VALUES
('Aditya Gore', 'student@smartexam.com', 'student123', 'STUDENT'),
('Administrator', 'admin@smartexam.com', 'admin123', 'ADMIN');

-- Insert Subjects
INSERT INTO subjects (name, code, description) VALUES
('Data Structures & Algorithms', 'DSA', 'Core DSA concepts including stacks, queues, trees, graphs & algorithms'),
('Java Programming', 'JAVA', 'Core Java, OOPs principles, collections, exceptions and multithreading'),
('Database Management', 'DBMS', 'Relational database systems, normalization, indexing and SQL queries'),
('C Programming', 'C', 'Pointers, memory allocation, structs and standard C programming'),
('General Aptitude', 'APT', 'Logical reasoning, quantitative problem solving and analytics');

-- Insert Sample Questions
INSERT INTO questions (subject_id, question_text, option_a, option_b, option_c, option_d, correct_option, difficulty, marks) VALUES
(1, 'Which data structure follows the LIFO (Last In First Out) principle?', 'Queue', 'Stack', 'Tree', 'Array', 'B', 'Easy', 2),
(1, 'Which data structure follows the FIFO (First In First Out) principle?', 'Stack', 'Queue', 'Binary Search Tree', 'Graph', 'B', 'Easy', 2),
(1, 'What is the time complexity to access an element by index in an array?', 'O(1)', 'O(n)', 'O(log n)', 'O(n²)', 'A', 'Easy', 2),
(1, 'Which of the following data structures is non-linear?', 'Array', 'Linked List', 'Stack', 'Binary Tree', 'D', 'Easy', 2),
(1, 'What is the worst-case time complexity of Linear Search in an array of size n?', 'O(1)', 'O(log n)', 'O(n)', 'O(n log n)', 'C', 'Easy', 2),
(1, 'What is the prerequisite condition required to perform Binary Search on an array?', 'The array must be sorted', 'The array must contain only positive numbers', 'The array must have an even number of elements', 'The array must be dynamic', 'A', 'Easy', 2),
(1, 'In a singly linked list, each node contains data and a pointer to:', 'The previous node', 'The next node', 'The head node', 'Both next and previous nodes', 'B', 'Easy', 2),
(1, 'Which operation is used to insert an element into a Stack?', 'Pop', 'Push', 'Enqueue', 'Dequeue', 'B', 'Easy', 2),
(1, 'Which operation is used to remove an element from a Queue?', 'Push', 'Pop', 'Enqueue', 'Dequeue', 'D', 'Easy', 2),
(1, 'What is the maximum number of children a binary tree node can have?', '1', '2', '3', 'Any number', 'B', 'Easy', 2),
(1, 'What is the time complexity of Binary Search on a sorted array of size n?', 'O(1)', 'O(log n)', 'O(n)', 'O(n²)', 'B', 'Easy', 2),
(1, 'Which tree traversal visits the root node before its left and right subtrees?', 'Inorder', 'Preorder', 'Postorder', 'Level-order', 'B', 'Easy', 2),
(1, 'Which data structure is typically used to implement Breadth-First Search (BFS)?', 'Stack', 'Queue', 'Priority Queue', 'Binary Tree', 'B', 'Easy', 2),
(1, 'Which data structure is typically used to implement Depth-First Search (DFS)?', 'Queue', 'Stack', 'Circular Queue', 'Hash Map', 'B', 'Easy', 2),
(1, 'What is the term for attempting to push an element onto a full stack?', 'Underflow', 'Overflow', 'Segmentation fault', 'Deadlock', 'B', 'Easy', 2),
(1, 'What is the term for attempting to pop an element from an empty stack?', 'Overflow', 'Underflow', 'Garbage collection', 'Memory leak', 'B', 'Easy', 2),
(1, 'In a circular queue of capacity N, after index N-1, where does the next element go?', 'Index N', 'Index 0', 'Index -1', 'It cannot be inserted', 'B', 'Easy', 2),
(1, 'Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?', 'Selection Sort', 'Bubble Sort', 'Merge Sort', 'QuickSort', 'B', 'Easy', 2),
(1, 'A node in a standard doubly linked list contains how many pointers?', '0', '1', '2', '3', 'C', 'Easy', 2),
(1, 'What is the top pointer of a Stack initialized to when using a 0-indexed array?', '-1', '0', '1', 'null', 'A', 'Easy', 2),
(2, 'Which keyword is used to create an instance of a class in Java?', 'class', 'new', 'create', 'alloc', 'B', 'Easy', 2),
(2, 'What is the default value of a boolean instance variable in Java?', 'true', 'false', '0', 'null', 'B', 'Easy', 2),
(2, 'Which of the following is NOT a primitive data type in Java?', 'int', 'float', 'String', 'char', 'C', 'Easy', 2),
(2, 'Which keyword in Java is used to inherit a class?', 'implements', 'extends', 'inherits', 'instanceof', 'B', 'Easy', 2),
(2, 'Which keyword in Java is used to implement an interface?', 'extends', 'implements', 'interface', 'import', 'B', 'Easy', 2),
(2, 'What is the return type of a constructor in Java?', 'void', 'int', 'No return type', 'Object', 'C', 'Easy', 2),
(2, 'Which Java keyword prevents a method from being overridden in a subclass?', 'static', 'final', 'abstract', 'synchronized', 'B', 'Easy', 2),
(2, 'Which method is the starting execution point for any Java standalone application?', 'start()', 'main()', 'run()', 'init()', 'B', 'Easy', 2),
(2, 'What is the size of an int data type in standard Java?', '2 bytes', '4 bytes', '8 bytes', '1 byte', 'B', 'Easy', 2),
(2, 'Which exception is thrown when attempting to divide an integer by zero in Java?', 'NullPointerException', 'ArithmeticException', 'NumberFormatException', 'ArrayIndexOutOfBoundsException', 'B', 'Easy', 2),
(2, 'What does JVM stand for?', 'Java Virtual Machine', 'Java Variable Manager', 'Java Visual Mechanism', 'Java Vector Method', 'A', 'Easy', 2),
(2, 'Which package is automatically imported in every Java program without explicit import?', 'java.util', 'java.io', 'java.lang', 'java.net', 'C', 'Easy', 2),
(2, 'Which block is always executed in exception handling, whether an exception occurs or not?', 'try', 'catch', 'finally', 'throw', 'C', 'Easy', 2),
(2, 'Which keyword is used to refer to the immediate parent class object in Java?', 'this', 'super', 'parent', 'base', 'B', 'Easy', 2),
(2, 'Which collection class in Java provides a resizable array implementation of the List interface?', 'ArrayList', 'HashSet', 'TreeSet', 'HashMap', 'A', 'Easy', 2),
(2, 'What is the index of the first element in a Java array?', '-1', '0', '1', 'Depends on declaration', 'B', 'Easy', 2),
(2, 'Which keyword is used to define a constant variable whose value cannot change in Java?', 'const', 'final', 'static', 'immutable', 'B', 'Easy', 2),
(2, 'Defining multiple methods with the same name but different parameters in one class is known as:', 'Method Overloading', 'Method Overriding', 'Encapsulation', 'Inheritance', 'A', 'Easy', 2),
(2, 'Which Java keyword is used to access package members from another file or package?', 'include', 'import', 'using', 'require', 'B', 'Easy', 2),
(2, 'Are String objects in Java mutable or immutable?', 'Mutable', 'Immutable', 'Depends on compiler', 'Dynamic', 'B', 'Easy', 2),
(3, 'What does DBMS stand for?', 'Database Management System', 'Data Base Multi System', 'Digital Backup Management System', 'Data Block Memory Storage', 'A', 'Easy', 2),
(3, 'What does SQL stand for?', 'Structured Query Language', 'Sequential Query List', 'Simple Query Logic', 'Standard Question Language', 'A', 'Easy', 2),
(3, 'Which SQL command is used to retrieve data from a database table?', 'GET', 'FETCH', 'SELECT', 'RETRIEVE', 'C', 'Easy', 2),
(3, 'Which SQL clause is used to filter records based on a specified condition?', 'ORDER BY', 'GROUP BY', 'WHERE', 'HAVING', 'C', 'Easy', 2),
(3, 'Which key uniquely identifies each record/tuple in a database table?', 'Foreign Key', 'Candidate Key', 'Primary Key', 'Super Key', 'C', 'Easy', 2),
(3, 'A foreign key in a child table references which key in the parent table?', 'Composite Key', 'Primary Key', 'Foreign Key', 'Alternate Key', 'B', 'Easy', 2),
(3, 'Which SQL command is used to insert new rows of data into a table?', 'ADD ROW', 'INSERT INTO', 'UPDATE', 'CREATE', 'B', 'Easy', 2),
(3, 'Which SQL command is used to modify existing data records in a table?', 'MODIFY', 'CHANGE', 'UPDATE', 'ALTER', 'C', 'Easy', 2),
(3, 'Which SQL command is used to remove specific rows from a table?', 'REMOVE', 'DELETE', 'DROP', 'TRUNCATE', 'B', 'Easy', 2),
(3, 'Which SQL statement is used to permanently remove an entire table including its schema?', 'DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'CLEAR TABLE', 'B', 'Easy', 2),
(3, 'What does ACID stand for in the context of DBMS transactions?', 'Atomicity, Consistency, Isolation, Durability', 'Accuracy, Control, Integrity, Data', 'Access, Security, Identity, Device', 'Auto, Cache, Index, Directory', 'A', 'Easy', 2),
(3, 'Which ACID property ensures that all operations in a transaction succeed or none occur?', 'Consistency', 'Atomicity', 'Isolation', 'Durability', 'B', 'Easy', 2),
(3, 'Which clause is used in SQL to sort the query result-set?', 'SORT BY', 'ORDER BY', 'ARRANGE BY', 'GROUP BY', 'B', 'Easy', 2),
(3, 'By default, what sort order does the ORDER BY clause apply in SQL?', 'Descending (DESC)', 'Ascending (ASC)', 'Random', 'Creation order', 'B', 'Easy', 2),
(3, 'Which SQL aggregate function is used to count the number of rows matching a condition?', 'SUM()', 'COUNT()', 'TOTAL()', 'NUMBER()', 'B', 'Easy', 2),
(3, 'Which SQL keyword is used to return only distinct (different) values?', 'UNIQUE', 'DISTINCT', 'DIFFERENT', 'SEPARATE', 'B', 'Easy', 2),
(3, 'What type of SQL JOIN returns rows that have matching values in both tables?', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN', 'C', 'Easy', 2),
(3, 'What fundamental rule does First Normal Form (1NF) enforce in a database table?', 'Elimination of transitive dependency', 'Atomic (indivisible) values in every column', 'No partial key dependency', 'Primary key indexing', 'B', 'Easy', 2),
(3, 'Which of the following SQL commands belongs to DDL (Data Definition Language)?', 'SELECT', 'INSERT', 'CREATE', 'UPDATE', 'C', 'Easy', 2),
(3, 'What is a View in relational SQL databases?', 'A physical copy of the database', 'A virtual table based on a SQL query result', 'A database backup file', 'A special primary key index', 'B', 'Easy', 2),
(4, 'Who is recognized as the creator of the C programming language?', 'Bjarne Stroustrup', 'Dennis Ritchie', 'James Gosling', 'Guido van Rossum', 'B', 'Easy', 2),
(4, 'Which header file is required to use printf() and scanf() in a C program?', '<stdlib.h>', '<stdio.h>', '<conio.h>', '<string.h>', 'B', 'Easy', 2),
(4, 'Which format specifier is used to print an integer value in C?', '%f', '%c', '%d', '%s', 'C', 'Easy', 2),
(4, 'Which format specifier is used to print a single character in C?', '%c', '%s', '%d', '%f', 'A', 'Easy', 2),
(4, 'What character is used to terminate every simple statement in C?', ': (colon)', '; (semicolon)', '. (dot)', ', (comma)', 'B', 'Easy', 2),
(4, 'What is the standard return type of the main() function in ANSI C?', 'void', 'int', 'float', 'char', 'B', 'Easy', 2),
(4, 'What does a pointer variable store in C?', 'Value of another variable', 'Memory address of another variable', 'Name of a function', 'Size of data type', 'B', 'Easy', 2),
(4, 'Which operator is used to determine the memory address of a variable in C?', '* (asterisk)', '& (ampersand)', '-> (arrow)', '% (percent)', 'B', 'Easy', 2),
(4, 'Which operator is used to dereference a pointer (access value at address) in C?', '&', '*', '#', '->', 'B', 'Easy', 2),
(4, 'What is the size of a char data type in standard C?', '1 byte', '2 bytes', '4 bytes', '8 bytes', 'A', 'Easy', 2),
(4, 'Which escape sequence character marks the end of a string in C?', '''\0'' (null character)', '''\n'' (newline)', '''\t'' (tab)', ''' '' (space)', 'A', 'Easy', 2),
(4, 'Which function dynamically allocates memory in C without initializing it to zero?', 'calloc()', 'malloc()', 'realloc()', 'free()', 'B', 'Easy', 2),
(4, 'Which function is used to deallocate dynamically allocated heap memory in C?', 'delete()', 'free()', 'clear()', 'release()', 'B', 'Easy', 2),
(4, 'Which function dynamically allocates memory and initializes all allocated bytes to zero?', 'malloc()', 'calloc()', 'alloc()', 'memset()', 'B', 'Easy', 2),
(4, 'What is the starting index of an array in C?', '-1', '0', '1', 'User-defined', 'B', 'Easy', 2),
(4, 'Which loop construct in C is guaranteed to execute its body at least once?', 'for loop', 'while loop', 'do-while loop', 'nested loop', 'C', 'Easy', 2),
(4, 'Which keyword is used to terminate and exit immediately from a loop in C?', 'exit', 'stop', 'break', 'continue', 'C', 'Easy', 2),
(4, 'Which keyword is used to skip the rest of the current iteration and jump to the next?', 'skip', 'continue', 'pass', 'next', 'B', 'Easy', 2),
(4, 'Which compile-time operator returns the size of a variable or data type in bytes?', 'sizeof', 'len', 'size', 'bytes', 'A', 'Easy', 2),
(4, 'Which standard library function in <string.h> is used to determine the length of a string?', 'strlength()', 'strlen()', 'strcount()', 'size()', 'B', 'Easy', 2),
(5, 'What is 15% of 200?', '20', '25', '30', '35', 'C', 'Easy', 2),
(5, 'Find the next number in the geometric progression: 2, 4, 8, 16, ?', '24', '30', '32', '64', 'C', 'Easy', 2),
(5, 'If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?', '120 km', '140 km', '150 km', '160 km', 'C', 'Easy', 2),
(5, 'What is the average of the five numbers: 10, 20, 30, 40, and 50?', '25', '30', '35', '40', 'B', 'Easy', 2),
(5, 'What is the square root of 144?', '11', '12', '13', '14', 'B', 'Easy', 2),
(5, 'If the price of an item increases from ₹100 to ₹120, what is the percentage increase?', '15%', '20%', '25%', '30%', 'B', 'Easy', 2),
(5, 'Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?', '22', '25', '30', '35', 'B', 'Easy', 2),
(5, 'A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?', '150 m', '200 m', '250 m', '300 m', 'B', 'Easy', 2),
(5, 'If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?', '2 days', '5 days', '10 days', '15 days', 'B', 'Easy', 2),
(5, 'What is the simplified ratio of 30 minutes to 2 hours?', '1 : 2', '1 : 3', '1 : 4', '1 : 6', 'C', 'Easy', 2),
(5, 'If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?', '10%', '15%', '20%', '25%', 'C', 'Easy', 2),
(5, 'What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?', '₹100', '₹150', '₹200', '₹250', 'C', 'Easy', 2),
(5, 'What is the sum of the interior angles of any triangle?', '90°', '180°', '270°', '360°', 'B', 'Easy', 2),
(5, 'What is the value of 7³ (7 raised to the power of 3)?', '49', '243', '343', '353', 'C', 'Easy', 2),
(5, 'Find the next letter in the alphabet sequence: A, C, E, G, ?', 'H', 'I', 'J', 'K', 'B', 'Easy', 2),
(5, 'When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?', '45°', '60°', '90°', '120°', 'C', 'Easy', 2),
(5, 'What is the perimeter of a square whose side length is 8 cm?', '16 cm', '24 cm', '32 cm', '64 cm', 'C', 'Easy', 2),
(5, 'What is the median of the ordered data set: 3, 7, 9, 12, 15?', '7', '9', '10', '12', 'B', 'Easy', 2),
(5, 'If today is Monday, what day of the week will it be exactly 14 days from today?', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'B', 'Easy', 2),
(5, 'Complete the logical word analogy: Doctor : Hospital :: Teacher : ?', 'School', 'Court', 'Office', 'Factory', 'A', 'Easy', 2);

-- Insert Sample Exams
INSERT INTO exams (title, subject_id, duration_minutes, total_questions, pass_percentage, status) VALUES
('Data Structures & Algorithms Mock Test', 1, 30, 15, 40, 'Active'),
('Java OOPs & Multithreading Assessment', 2, 25, 10, 40, 'Active'),
('DBMS SQL & Normalization Diagnostic', 3, 20, 10, 40, 'Active'),
('C Programming & Pointers Challenge', 4, 20, 10, 40, 'Active'),
('Quantitative Aptitude & Logic Sprint', 5, 15, 10, 40, 'Active');
