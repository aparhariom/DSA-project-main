/**
 * =========================================================
 * SMARTEXAM - CENTRAL STORE & DATA LAYER (store.js)
 * Provides unified state management across Student & Admin portals.
 * =========================================================
 */

(function (globalScope) {
    "use strict";

    const STORAGE_KEYS = {
        QUESTIONS: "adminQuestions",
        EXAMS: "adminExams",
        STUDENTS: "registeredStudents",
        RESULTS: "allExamResults",
        LATEST_RESULT: "latestResult",
        CURRENT_STUDENT: "student",
        CURRENT_ADMIN: "adminUser",
        STUDENT_LOGGED_IN: "studentLoggedIn",
        ADMIN_LOGGED_IN: "adminLoggedIn"
    };

    // Default Question Pool across 5 Core Tracks
    const DEFAULT_QUESTIONS = [
        {
                "id": 101,
                "text": "Which data structure follows the LIFO (Last In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Tree",
                        "Array"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 102,
                "text": "Which data structure follows the FIFO (First In First Out) principle?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Binary Search Tree",
                        "Graph"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 103,
                "text": "What is the time complexity to access an element by index in an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(n)",
                        "O(log n)",
                        "O(n²)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 104,
                "text": "Which of the following data structures is non-linear?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Array",
                        "Linked List",
                        "Stack",
                        "Binary Tree"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 105,
                "text": "What is the worst-case time complexity of Linear Search in an array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n log n)"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 106,
                "text": "What is the prerequisite condition required to perform Binary Search on an array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The array must be sorted",
                        "The array must contain only positive numbers",
                        "The array must have an even number of elements",
                        "The array must be dynamic"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 107,
                "text": "In a singly linked list, each node contains data and a pointer to:",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "The previous node",
                        "The next node",
                        "The head node",
                        "Both next and previous nodes"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 108,
                "text": "Which operation is used to insert an element into a Stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Pop",
                        "Push",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 109,
                "text": "Which operation is used to remove an element from a Queue?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Push",
                        "Pop",
                        "Enqueue",
                        "Dequeue"
                ],
                "correctOption": "D",
                "marks": 2
        },
        {
                "id": 110,
                "text": "What is the maximum number of children a binary tree node can have?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "1",
                        "2",
                        "3",
                        "Any number"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 111,
                "text": "What is the time complexity of Binary Search on a sorted array of size n?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "O(1)",
                        "O(log n)",
                        "O(n)",
                        "O(n²)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 112,
                "text": "Which tree traversal visits the root node before its left and right subtrees?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Inorder",
                        "Preorder",
                        "Postorder",
                        "Level-order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 113,
                "text": "Which data structure is typically used to implement Breadth-First Search (BFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Stack",
                        "Queue",
                        "Priority Queue",
                        "Binary Tree"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 114,
                "text": "Which data structure is typically used to implement Depth-First Search (DFS)?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Queue",
                        "Stack",
                        "Circular Queue",
                        "Hash Map"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 115,
                "text": "What is the term for attempting to push an element onto a full stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Underflow",
                        "Overflow",
                        "Segmentation fault",
                        "Deadlock"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 116,
                "text": "What is the term for attempting to pop an element from an empty stack?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Overflow",
                        "Underflow",
                        "Garbage collection",
                        "Memory leak"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 117,
                "text": "In a circular queue of capacity N, after index N-1, where does the next element go?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Index N",
                        "Index 0",
                        "Index -1",
                        "It cannot be inserted"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 118,
                "text": "Which sorting algorithm repeatedly compares adjacent elements and swaps them if out of order?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "Selection Sort",
                        "Bubble Sort",
                        "Merge Sort",
                        "QuickSort"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 119,
                "text": "A node in a standard doubly linked list contains how many pointers?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "0",
                        "1",
                        "2",
                        "3"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 120,
                "text": "What is the top pointer of a Stack initialized to when using a 0-indexed array?",
                "subject": "DSA",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "null"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 201,
                "text": "Which keyword is used to create an instance of a class in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "class",
                        "new",
                        "create",
                        "alloc"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 202,
                "text": "What is the default value of a boolean instance variable in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "true",
                        "false",
                        "0",
                        "null"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 203,
                "text": "Which of the following is NOT a primitive data type in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "int",
                        "float",
                        "String",
                        "char"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 204,
                "text": "Which keyword in Java is used to inherit a class?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "implements",
                        "extends",
                        "inherits",
                        "instanceof"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 205,
                "text": "Which keyword in Java is used to implement an interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "extends",
                        "implements",
                        "interface",
                        "import"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 206,
                "text": "What is the return type of a constructor in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "No return type",
                        "Object"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 207,
                "text": "Which Java keyword prevents a method from being overridden in a subclass?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "static",
                        "final",
                        "abstract",
                        "synchronized"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 208,
                "text": "Which method is the starting execution point for any Java standalone application?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "start()",
                        "main()",
                        "run()",
                        "init()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 209,
                "text": "What is the size of an int data type in standard Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "2 bytes",
                        "4 bytes",
                        "8 bytes",
                        "1 byte"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 210,
                "text": "Which exception is thrown when attempting to divide an integer by zero in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "NullPointerException",
                        "ArithmeticException",
                        "NumberFormatException",
                        "ArrayIndexOutOfBoundsException"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 211,
                "text": "What does JVM stand for?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Java Virtual Machine",
                        "Java Variable Manager",
                        "Java Visual Mechanism",
                        "Java Vector Method"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 212,
                "text": "Which package is automatically imported in every Java program without explicit import?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "java.util",
                        "java.io",
                        "java.lang",
                        "java.net"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 213,
                "text": "Which block is always executed in exception handling, whether an exception occurs or not?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "try",
                        "catch",
                        "finally",
                        "throw"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 214,
                "text": "Which keyword is used to refer to the immediate parent class object in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "this",
                        "super",
                        "parent",
                        "base"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 215,
                "text": "Which collection class in Java provides a resizable array implementation of the List interface?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "ArrayList",
                        "HashSet",
                        "TreeSet",
                        "HashMap"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 216,
                "text": "What is the index of the first element in a Java array?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "Depends on declaration"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 217,
                "text": "Which keyword is used to define a constant variable whose value cannot change in Java?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "const",
                        "final",
                        "static",
                        "immutable"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 218,
                "text": "Defining multiple methods with the same name but different parameters in one class is known as:",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Method Overloading",
                        "Method Overriding",
                        "Encapsulation",
                        "Inheritance"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 219,
                "text": "Which Java keyword is used to access package members from another file or package?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "include",
                        "import",
                        "using",
                        "require"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 220,
                "text": "Are String objects in Java mutable or immutable?",
                "subject": "Java",
                "difficulty": "Easy",
                "options": [
                        "Mutable",
                        "Immutable",
                        "Depends on compiler",
                        "Dynamic"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 301,
                "text": "What does DBMS stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Database Management System",
                        "Data Base Multi System",
                        "Digital Backup Management System",
                        "Data Block Memory Storage"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 302,
                "text": "What does SQL stand for?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Structured Query Language",
                        "Sequential Query List",
                        "Simple Query Logic",
                        "Standard Question Language"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 303,
                "text": "Which SQL command is used to retrieve data from a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "GET",
                        "FETCH",
                        "SELECT",
                        "RETRIEVE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 304,
                "text": "Which SQL clause is used to filter records based on a specified condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ORDER BY",
                        "GROUP BY",
                        "WHERE",
                        "HAVING"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 305,
                "text": "Which key uniquely identifies each record/tuple in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Foreign Key",
                        "Candidate Key",
                        "Primary Key",
                        "Super Key"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 306,
                "text": "A foreign key in a child table references which key in the parent table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Composite Key",
                        "Primary Key",
                        "Foreign Key",
                        "Alternate Key"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 307,
                "text": "Which SQL command is used to insert new rows of data into a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "ADD ROW",
                        "INSERT INTO",
                        "UPDATE",
                        "CREATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 308,
                "text": "Which SQL command is used to modify existing data records in a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "MODIFY",
                        "CHANGE",
                        "UPDATE",
                        "ALTER"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 309,
                "text": "Which SQL command is used to remove specific rows from a table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "REMOVE",
                        "DELETE",
                        "DROP",
                        "TRUNCATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 310,
                "text": "Which SQL statement is used to permanently remove an entire table including its schema?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "DELETE TABLE",
                        "DROP TABLE",
                        "REMOVE TABLE",
                        "CLEAR TABLE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 311,
                "text": "What does ACID stand for in the context of DBMS transactions?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Atomicity, Consistency, Isolation, Durability",
                        "Accuracy, Control, Integrity, Data",
                        "Access, Security, Identity, Device",
                        "Auto, Cache, Index, Directory"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 312,
                "text": "Which ACID property ensures that all operations in a transaction succeed or none occur?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Consistency",
                        "Atomicity",
                        "Isolation",
                        "Durability"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 313,
                "text": "Which clause is used in SQL to sort the query result-set?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SORT BY",
                        "ORDER BY",
                        "ARRANGE BY",
                        "GROUP BY"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 314,
                "text": "By default, what sort order does the ORDER BY clause apply in SQL?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Descending (DESC)",
                        "Ascending (ASC)",
                        "Random",
                        "Creation order"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 315,
                "text": "Which SQL aggregate function is used to count the number of rows matching a condition?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SUM()",
                        "COUNT()",
                        "TOTAL()",
                        "NUMBER()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 316,
                "text": "Which SQL keyword is used to return only distinct (different) values?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "UNIQUE",
                        "DISTINCT",
                        "DIFFERENT",
                        "SEPARATE"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 317,
                "text": "What type of SQL JOIN returns rows that have matching values in both tables?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "LEFT JOIN",
                        "RIGHT JOIN",
                        "INNER JOIN",
                        "FULL OUTER JOIN"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 318,
                "text": "What fundamental rule does First Normal Form (1NF) enforce in a database table?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "Elimination of transitive dependency",
                        "Atomic (indivisible) values in every column",
                        "No partial key dependency",
                        "Primary key indexing"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 319,
                "text": "Which of the following SQL commands belongs to DDL (Data Definition Language)?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "SELECT",
                        "INSERT",
                        "CREATE",
                        "UPDATE"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 320,
                "text": "What is a View in relational SQL databases?",
                "subject": "DBMS",
                "difficulty": "Easy",
                "options": [
                        "A physical copy of the database",
                        "A virtual table based on a SQL query result",
                        "A database backup file",
                        "A special primary key index"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 401,
                "text": "Who is recognized as the creator of the C programming language?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Bjarne Stroustrup",
                        "Dennis Ritchie",
                        "James Gosling",
                        "Guido van Rossum"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 402,
                "text": "Which header file is required to use printf() and scanf() in a C program?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "<stdlib.h>",
                        "<stdio.h>",
                        "<conio.h>",
                        "<string.h>"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 403,
                "text": "Which format specifier is used to print an integer value in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%f",
                        "%c",
                        "%d",
                        "%s"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 404,
                "text": "Which format specifier is used to print a single character in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "%c",
                        "%s",
                        "%d",
                        "%f"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 405,
                "text": "What character is used to terminate every simple statement in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        ": (colon)",
                        "; (semicolon)",
                        ". (dot)",
                        ", (comma)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 406,
                "text": "What is the standard return type of the main() function in ANSI C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "void",
                        "int",
                        "float",
                        "char"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 407,
                "text": "What does a pointer variable store in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "Value of another variable",
                        "Memory address of another variable",
                        "Name of a function",
                        "Size of data type"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 408,
                "text": "Which operator is used to determine the memory address of a variable in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "* (asterisk)",
                        "& (ampersand)",
                        "-> (arrow)",
                        "% (percent)"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 409,
                "text": "Which operator is used to dereference a pointer (access value at address) in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "&",
                        "*",
                        "#",
                        "->"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 410,
                "text": "What is the size of a char data type in standard C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "1 byte",
                        "2 bytes",
                        "4 bytes",
                        "8 bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 411,
                "text": "Which escape sequence character marks the end of a string in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "'\\0' (null character)",
                        "'\\n' (newline)",
                        "'\\t' (tab)",
                        "' ' (space)"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 412,
                "text": "Which function dynamically allocates memory in C without initializing it to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "calloc()",
                        "malloc()",
                        "realloc()",
                        "free()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 413,
                "text": "Which function is used to deallocate dynamically allocated heap memory in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "delete()",
                        "free()",
                        "clear()",
                        "release()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 414,
                "text": "Which function dynamically allocates memory and initializes all allocated bytes to zero?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "malloc()",
                        "calloc()",
                        "alloc()",
                        "memset()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 415,
                "text": "What is the starting index of an array in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "-1",
                        "0",
                        "1",
                        "User-defined"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 416,
                "text": "Which loop construct in C is guaranteed to execute its body at least once?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "for loop",
                        "while loop",
                        "do-while loop",
                        "nested loop"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 417,
                "text": "Which keyword is used to terminate and exit immediately from a loop in C?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "exit",
                        "stop",
                        "break",
                        "continue"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 418,
                "text": "Which keyword is used to skip the rest of the current iteration and jump to the next?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "skip",
                        "continue",
                        "pass",
                        "next"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 419,
                "text": "Which compile-time operator returns the size of a variable or data type in bytes?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "sizeof",
                        "len",
                        "size",
                        "bytes"
                ],
                "correctOption": "A",
                "marks": 2
        },
        {
                "id": 420,
                "text": "Which standard library function in <string.h> is used to determine the length of a string?",
                "subject": "C",
                "difficulty": "Easy",
                "options": [
                        "strlength()",
                        "strlen()",
                        "strcount()",
                        "size()"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 501,
                "text": "What is 15% of 200?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "20",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 502,
                "text": "Find the next number in the geometric progression: 2, 4, 8, 16, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "24",
                        "30",
                        "32",
                        "64"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 503,
                "text": "If a car travels at a constant speed of 60 km/h, what distance does it cover in 2.5 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "120 km",
                        "140 km",
                        "150 km",
                        "160 km"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 504,
                "text": "What is the average of the five numbers: 10, 20, 30, 40, and 50?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "25",
                        "30",
                        "35",
                        "40"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 505,
                "text": "What is the square root of 144?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "11",
                        "12",
                        "13",
                        "14"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 506,
                "text": "If the price of an item increases from ₹100 to ₹120, what is the percentage increase?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "15%",
                        "20%",
                        "25%",
                        "30%"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 507,
                "text": "Find the missing number in the arithmetic progression: 5, 10, 15, 20, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "22",
                        "25",
                        "30",
                        "35"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 508,
                "text": "A train running at 72 km/h crosses a 200m platform in 20s. What is the length of the train?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "150 m",
                        "200 m",
                        "250 m",
                        "300 m"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 509,
                "text": "If 5 workers complete a task in 10 days, how many days will 10 workers take at the same rate?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "2 days",
                        "5 days",
                        "10 days",
                        "15 days"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 510,
                "text": "What is the simplified ratio of 30 minutes to 2 hours?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "1 : 2",
                        "1 : 3",
                        "1 : 4",
                        "1 : 6"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 511,
                "text": "If the cost price of an article is ₹500 and the selling price is ₹600, what is the profit percentage?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "10%",
                        "15%",
                        "20%",
                        "25%"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 512,
                "text": "What is the simple interest on a principal of ₹1,000 at 10% per annum for 2 years?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "₹100",
                        "₹150",
                        "₹200",
                        "₹250"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 513,
                "text": "What is the sum of the interior angles of any triangle?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "90°",
                        "180°",
                        "270°",
                        "360°"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 514,
                "text": "What is the value of 7³ (7 raised to the power of 3)?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "49",
                        "243",
                        "343",
                        "353"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 515,
                "text": "Find the next letter in the alphabet sequence: A, C, E, G, ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "H",
                        "I",
                        "J",
                        "K"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 516,
                "text": "When an analog clock displays 3:00, what is the angle between the hour hand and minute hand?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "45°",
                        "60°",
                        "90°",
                        "120°"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 517,
                "text": "What is the perimeter of a square whose side length is 8 cm?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "16 cm",
                        "24 cm",
                        "32 cm",
                        "64 cm"
                ],
                "correctOption": "C",
                "marks": 2
        },
        {
                "id": 518,
                "text": "What is the median of the ordered data set: 3, 7, 9, 12, 15?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "7",
                        "9",
                        "10",
                        "12"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 519,
                "text": "If today is Monday, what day of the week will it be exactly 14 days from today?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "Sunday",
                        "Monday",
                        "Tuesday",
                        "Wednesday"
                ],
                "correctOption": "B",
                "marks": 2
        },
        {
                "id": 520,
                "text": "Complete the logical word analogy: Doctor : Hospital :: Teacher : ?",
                "subject": "Aptitude",
                "difficulty": "Easy",
                "options": [
                        "School",
                        "Court",
                        "Office",
                        "Factory"
                ],
                "correctOption": "A",
                "marks": 2
        }
];

    // Default Scheduled Exams with Deadlines
    const futureDate = (days) => new Date(Date.now() + days * 24 * 3600 * 1000).toISOString();
    const DEFAULT_EXAMS = [
        { id: 1, title: "Data Structures & Algorithms Mock Test", subject: "DSA", duration: "30 Mins", durationMinutes: 30, questions: 20, passPercent: 40, deadline: futureDate(7), status: "Active" },
        { id: 2, title: "Java OOPs & Multithreading Assessment", subject: "Java", duration: "25 Mins", durationMinutes: 25, questions: 20, passPercent: 40, deadline: futureDate(5), status: "Active" },
        { id: 3, title: "DBMS SQL & Normalization Diagnostic", subject: "DBMS", duration: "20 Mins", durationMinutes: 20, questions: 20, passPercent: 40, deadline: futureDate(10), status: "Active" },
        { id: 4, title: "C Programming & Pointers Challenge", subject: "C", duration: "20 Mins", durationMinutes: 20, questions: 20, passPercent: 40, deadline: futureDate(3), status: "Active" },
        { id: 5, title: "Quantitative Aptitude & Logic Sprint", subject: "Aptitude", duration: "15 Mins", durationMinutes: 15, questions: 20, passPercent: 40, deadline: futureDate(4), status: "Active" },
        { id: 6, title: "Full Syllabus Comprehensive Mock Exam", subject: "All", duration: "45 Mins", durationMinutes: 45, questions: 25, passPercent: 40, deadline: futureDate(14), status: "Active" }
    ];

    // Default Mock Student and Admin
    const DEFAULT_STUDENT = {
        id: 1,
        name: "Aditya Gore",
        email: "student@smartexam.com",
        password: "student123",
        registeredAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        registeredAtFormatted: "Initial Setup"
    };

    const DEFAULT_ADMIN = {
        name: "System Administrator",
        email: "admin@smartexam.com",
        password: "admin123"
    };

    // Default Pre-seeded Results for Leaderboard demo (Only Violation Snapshots)
    const DEFAULT_RESULTS = [
        {
            id: "res_demo_1",
            studentName: "Aditya Gore",
            studentEmail: "student@smartexam.com",
            examTitle: "Data Structures & Algorithms Mock Test",
            subject: "DSA",
            totalQuestions: 5,
            correct: 5,
            score: 14,
            totalMarks: 14,
            percentage: 100,
            status: "Passed",
            proctorStrikes: 0,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 24).toISOString(),
            dateFormatted: "Yesterday",
            proctorSnapshots: []
        },
        {
            id: "res_demo_2",
            studentName: "Priya Sharma",
            studentEmail: "priya@example.com",
            examTitle: "Java OOPs & Multithreading Assessment",
            subject: "Java",
            totalQuestions: 4,
            correct: 3,
            score: 6,
            totalMarks: 8,
            percentage: 75,
            status: "Passed",
            proctorStrikes: 1,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 48).toISOString(),
            dateFormatted: "2 days ago",
            proctorSnapshots: [
                { timestamp: "02:20:15 PM", label: "Violation: Tab Switch", type: "violation" }
            ]
        },
        {
            id: "res_demo_3",
            studentName: "Rahul Verma",
            studentEmail: "rahul@example.com",
            examTitle: "DBMS SQL & Normalization Diagnostic",
            subject: "DBMS",
            totalQuestions: 3,
            correct: 2,
            score: 5,
            totalMarks: 9,
            percentage: 56,
            status: "Passed",
            proctorStrikes: 0,
            proctorFlagged: false,
            date: new Date(Date.now() - 3600000 * 72).toISOString(),
            dateFormatted: "3 days ago",
            proctorSnapshots: []
        }
    ];

    /**
     * Storage Helpers
     */
    function getItem(key, fallback = null) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            console.error(`Error reading key ${key}:`, e);
            return fallback;
        }
    }

    function setItem(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error(`Error saving key ${key}:`, e);
        }
    }

    const SmartStore = {
        KEYS: STORAGE_KEYS,

        /**
         * Initializes default dataset in localStorage if missing.
         */
        init: function () {
            const existingQ = getItem(STORAGE_KEYS.QUESTIONS, null);
            if (!existingQ || existingQ.length < DEFAULT_QUESTIONS.length) {
                // Automatically upgrade/seed full 20 questions per subject
                setItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.EXAMS)) {
                setItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
                setItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            }
            if (!localStorage.getItem(STORAGE_KEYS.RESULTS)) {
                setItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
            }
            if (!localStorage.getItem(STORAGE_KEYS.CURRENT_STUDENT)) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
            }
        },

        // --- QUESTIONS ---
        getQuestions: function (subject = "All") {
            this.init();
            const pool = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            if (!subject || subject === "All" || subject.toLowerCase() === "all") {
                return pool;
            }
            const s = subject.toLowerCase().trim();
            return pool.filter(q => {
                const qs = (q.subject || "").toLowerCase().trim();
                if (qs === s) return true;
                if ((s.includes("c prog") || s === "c") && (qs === "c" || qs === "c programming")) return true;
                if ((s.includes("dsa") || s.includes("data structure")) && (qs === "dsa" || qs.includes("data structure"))) return true;
                if ((s.includes("dbms") || s.includes("database")) && (qs === "dbms" || qs.includes("database"))) return true;
                if (s.includes("aptitude") && qs.includes("aptitude")) return true;
                return false;
            });
        },

        addQuestion: function (question) {
            this.init();
            const questions = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            const maxId = questions.reduce((max, q) => (q.id > max ? q.id : max), 100);
            const newQ = {
                id: maxId + 1,
                text: question.text,
                subject: question.subject || "DSA",
                difficulty: question.difficulty || "Medium",
                options: question.options || ["Option A", "Option B", "Option C", "Option D"],
                correctOption: question.correctOption || "A",
                marks: parseInt(question.marks, 10) || 2
            };
            questions.push(newQ);
            setItem(STORAGE_KEYS.QUESTIONS, questions);
            return newQ;
        },

        deleteQuestion: function (id) {
            this.init();
            const questions = getItem(STORAGE_KEYS.QUESTIONS, DEFAULT_QUESTIONS);
            const filtered = questions.filter(q => q.id !== id);
            setItem(STORAGE_KEYS.QUESTIONS, filtered);
            return filtered;
        },

        // --- EXAMS ---
        getExams: function () {
            this.init();
            return getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
        },

        addExam: function (exam) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const defaultDeadline = new Date(Date.now() + 7 * 24 * 3600 * 1000).toISOString();
            const newExam = {
                id: Date.now(),
                title: exam.title,
                subject: exam.subject || "General",
                duration: `${exam.durationMinutes || 30} Mins`,
                durationMinutes: parseInt(exam.durationMinutes, 10) || 30,
                questions: parseInt(exam.questions, 10) || 15,
                passPercent: parseInt(exam.passPercent, 10) || 40,
                deadline: exam.deadline || defaultDeadline,
                status: exam.status || "Active"
            };
            exams.push(newExam);
            setItem(STORAGE_KEYS.EXAMS, exams);
            return newExam;
        },

        isExamExpired: function (exam) {
            if (!exam || !exam.deadline) return false;
            return new Date() > new Date(exam.deadline);
        },

        formatDateTime: function (isoStr) {
            if (!isoStr) return "-";
            const d = new Date(isoStr);
            if (Number.isNaN(d.getTime())) return isoStr;
            return d.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            });
        },

        toggleExamStatus: function (id) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const updated = exams.map(e => (e.id === id ? { ...e, status: e.status === "Active" ? "Closed" : "Active" } : e));
            setItem(STORAGE_KEYS.EXAMS, updated);
            return updated;
        },

        deleteExam: function (id) {
            this.init();
            const exams = getItem(STORAGE_KEYS.EXAMS, DEFAULT_EXAMS);
            const filtered = exams.filter(e => e.id !== id);
            setItem(STORAGE_KEYS.EXAMS, filtered);
            return filtered;
        },

        // --- RESULTS & LEADERBOARD ---
        getResults: function () {
            this.init();
            return getItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
        },

        getStudentResults: function (email) {
            const results = this.getResults();
            if (!email) return results;
            return results.filter(r => (r.studentEmail || "").toLowerCase() === email.toLowerCase());
        },

        saveResult: function (resultData) {
            this.init();
            const allResults = getItem(STORAGE_KEYS.RESULTS, DEFAULT_RESULTS);
            const resultRecord = {
                id: `res_${Date.now()}`,
                studentName: resultData.studentName || "Student",
                studentEmail: resultData.studentEmail || "student@smartexam.com",
                examTitle: resultData.examTitle || "General Exam",
                subject: resultData.subject || "General",
                totalQuestions: resultData.totalQuestions || 0,
                correct: resultData.correct || 0,
                score: resultData.score || 0,
                totalMarks: resultData.totalMarks || 0,
                percentage: resultData.percentage || 0,
                status: resultData.percentage >= (resultData.passPercent || 40) ? "Passed" : "Failed",
                proctorStrikes: resultData.proctorStrikes || 0,
                proctorFlagged: (resultData.proctorStrikes || 0) >= 3,
                date: new Date().toISOString(),
                dateFormatted: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }),
                proctorSnapshots: resultData.proctorSnapshots || [],
                violations: resultData.violations || [],
                breakdown: resultData.breakdown || []
            };

            // Prepend new result
            allResults.unshift(resultRecord);
            setItem(STORAGE_KEYS.RESULTS, allResults);
            setItem(STORAGE_KEYS.LATEST_RESULT, resultRecord);
            return resultRecord;
        },

        getLatestResult: function () {
            return getItem(STORAGE_KEYS.LATEST_RESULT, null);
        },

        clearResults: function () {
            setItem(STORAGE_KEYS.RESULTS, []);
            localStorage.removeItem(STORAGE_KEYS.LATEST_RESULT);
        },

        // --- STUDENTS & AUTH ---
        getStudents: function () {
            this.init();
            return getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
        },

        registerStudent: function (name, email, password) {
            this.init();
            const students = getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            const cleanName = (name || "").trim();
            const cleanEmail = (email || "").trim().toLowerCase();
            const exists = students.some(s => (s.email || "").toLowerCase() === cleanEmail);
            if (exists) {
                return { success: false, message: "Email is already registered. Please login." };
            }
            const newStudent = {
                id: Date.now(),
                name: cleanName,
                email: cleanEmail,
                password: password,
                registeredAt: new Date().toISOString(),
                registeredAtFormatted: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
            };
            students.push(newStudent);
            setItem(STORAGE_KEYS.STUDENTS, students);
            setItem(STORAGE_KEYS.CURRENT_STUDENT, newStudent);
            return { success: true, student: newStudent };
        },

        deleteStudent: function (email) {
            this.init();
            const students = this.getStudents();
            const filtered = students.filter(s => (s.email || '').toLowerCase() !== (email || '').toLowerCase());
            setItem(STORAGE_KEYS.STUDENTS, filtered);
            return filtered;
        },

        loginStudent: function (email, password) {
            this.init();
            const students = getItem(STORAGE_KEYS.STUDENTS, [DEFAULT_STUDENT]);
            const found = students.find(s => s.email.toLowerCase() === email.toLowerCase() && s.password === password);
            if (found) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, found);
                localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, "true");
                return { success: true, student: found };
            }
            // Demo fallback
            if (email === DEFAULT_STUDENT.email && password === DEFAULT_STUDENT.password) {
                setItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
                localStorage.setItem(STORAGE_KEYS.STUDENT_LOGGED_IN, "true");
                return { success: true, student: DEFAULT_STUDENT };
            }
            return { success: false, message: "Invalid email or password." };
        },

        getCurrentStudent: function () {
            return getItem(STORAGE_KEYS.CURRENT_STUDENT, DEFAULT_STUDENT);
        },

        loginAdmin: function (email, password) {
            if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
                setItem(STORAGE_KEYS.CURRENT_ADMIN, DEFAULT_ADMIN);
                localStorage.setItem(STORAGE_KEYS.ADMIN_LOGGED_IN, "true");
                return { success: true, admin: DEFAULT_ADMIN };
            }
            return { success: false, message: "Invalid admin credentials." };
        },

        logoutStudent: function () {
            localStorage.removeItem(STORAGE_KEYS.STUDENT_LOGGED_IN);
            window.location.href = "login.html";
        },

        logoutAdmin: function () {
            localStorage.removeItem(STORAGE_KEYS.ADMIN_LOGGED_IN);
            window.location.href = "login.html";
        },

        // --- ALGORITHMS: QUICKSORT ---
        /**
         * Sorts results array using the QuickSort algorithm by score (descending by default)
         * @param {Array} arr - The array of student result objects
         * @param {string} key - The property to compare (e.g., 'score', 'percentage')
         * @param {boolean} descending - True for highest score first
         * @returns {Array} Sorted array
         */
        quickSort: function (arr, key = "score", descending = true) {
            if (!Array.isArray(arr) || arr.length <= 1) return arr;

            const pivot = arr[arr.length - 1];
            const left = [];
            const right = [];

            for (let i = 0; i < arr.length - 1; i++) {
                const itemVal = arr[i][key] ?? 0;
                const pivotVal = pivot[key] ?? 0;

                if (descending) {
                    if (itemVal >= pivotVal) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                } else {
                    if (itemVal <= pivotVal) {
                        left.push(arr[i]);
                    } else {
                        right.push(arr[i]);
                    }
                }
            }

            return [...this.quickSort(left, key, descending), pivot, ...this.quickSort(right, key, descending)];
        },

        escapeHTML: function (val) {
            const div = document.createElement("div");
            div.textContent = String(val ?? "");
            return div.innerHTML;
        }
    };

    // Auto-initialize when loaded
    SmartStore.init();

    // Export to global scope & module.exports
    if (typeof globalScope !== "undefined") {
        globalScope.SmartStore = SmartStore;
    }
    if (typeof module !== "undefined" && module.exports) {
        module.exports = SmartStore;
    }

})(typeof window !== "undefined" ? window : globalThis);
