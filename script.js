// 1. Initialize Supabase Client (Replace with your actual keys)
const SUPABASE_URL = 'https://imawnnctiummsbmlrqzh.supabase.co'; // e.g., 'https://xyz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYXdubmN0aXVtbXNibWxycXpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNjgzMDksImV4cCI6MjA3Nzg0NDMwOX0.x9vAoBStER_dh995KpNJ_CPGbY-wCqsj1A7WYpHLm-Q'; 

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchStudents() {
    // 2. Query the 'Student' table
    let { data: students, error } = await supabase
        .from('Student')
        .select('*'); // Select all columns

    if (error) {
        console.error('Error fetching students:', error);
        return;
    }

    // 3. Display the data on the webpage
    const studentList = document.getElementById('student-data');
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.first_name} ${student.last_name} (${student.student_id})`;
        studentList.appendChild(listItem);
    });
}

// Ensure the Supabase library is loaded in index.html, then call the function
fetchStudents();
