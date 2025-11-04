-- 1. Insert 2 Departments
INSERT INTO Department (dept_name) VALUES
('Computer Science'),
('Electrical Engineering');

-- 2. Insert 4 Courses (2 for each department)
INSERT INTO Course (course_id, course_name, credits, dept_id) VALUES
('CS101', 'Database Management', 3, 1),  -- dept_id 1 is CS
('CS202', 'Data Structures', 4, 1),
('EE101', 'Circuit Analysis', 3, 2),  -- dept_id 2 is EE
('EE202', 'Digital Logic Design', 4, 2);

-- 3. Insert 4 Students (2 for each department)
INSERT INTO Student (student_id, first_name, last_name, email, dept_id) VALUES
('S001', 'Alice', 'Smith', 'alice@uni.edu', 1),
('S002', 'Bob', 'Johnson', 'bob@uni.edu', 1),
('S003', 'Charlie', 'Brown', 'charlie@uni.edu', 2),
('S004', 'Dana', 'White', 'dana@uni.edu', 2);

-- Total Records so far: 2 Dept + 4 Course + 4 Student = 10 Records
-- 4. Insert Enrollment Records (Show the relationships working!)
INSERT INTO Enrollment (student_id, course_id, grade) VALUES
('S001', 'CS101', 'A'),
('S001', 'CS202', 'A+'),
('S002', 'CS101', 'B+'),
('S003', 'EE101', 'A'),
('S004', 'EE202', 'B');
