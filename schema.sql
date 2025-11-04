-- 1. Create Department Table
CREATE TABLE Department (
    dept_id SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing PK
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- 2. Create Course Table
CREATE TABLE Course (
    course_id VARCHAR(10) PRIMARY KEY, -- Course ID is often a code like 'CS101'
    course_name VARCHAR(150) NOT NULL,
    credits INTEGER,
    dept_id INTEGER REFERENCES Department(dept_id)
);

-- 3. Create Student Table
CREATE TABLE Student (
    student_id VARCHAR(15) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    dept_id INTEGER REFERENCES Department(dept_id)
);

-- 4. Create Junction Table for the Many-to-Many Relationship
CREATE TABLE Enrollment (
    student_id VARCHAR(15) REFERENCES Student(student_id),
    course_id VARCHAR(10) REFERENCES Course(course_id),
    grade VARCHAR(2), -- e.g., 'A+', 'B'
    PRIMARY KEY (student_id, course_id) -- Composite Primary Key
);
