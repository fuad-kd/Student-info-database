// =======================================================
// ** ACTION REQUIRED: REPLACE PLACEHOLDERS BELOW **
// =======================================================
const SUPABASE_URL = 'https://imawnnctiummsbmlrqzh.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltYXdubmN0aXVtbXNibWxycXpoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjI2ODMwOSwiZXhwIjoyMDc3ODQ0MzA5fQ.syzcbJId4H0STs26vFDKrDUc0koPhVnNxXXzZIDrv-0'; 
// Find these in your Supabase Dashboard -> Settings -> API
// =======================================================

// 1. Initialize the Supabase Client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetches all student records from the live Supabase database and displays them.
 */
async function fetchAndDisplayStudents() {
    // 1. Get the list element from the HTML
    const studentList = document.getElementById('student-data');
    studentList.innerHTML = ''; // Clear the "Loading..." message

    // 2. Perform the database query
    let { data: students, error } = await supabase
        .from('Student') // Query the 'Student' table
        .select('student_id, first_name, last_name, dept_id') // Select only the necessary columns
        .order('student_id', { ascending: true }); // Sort by Student ID

    // 3. Handle errors
    if (error) {
        console.error('Error fetching students:', error.message);
        studentList.innerHTML = `<li style="color: red;">Error: Failed to connect to database. Check console for details.</li>`;
        return;
    }
    
    // 4. Handle success (If no students are returned)
    if (!students || students.length === 0) {
        studentList.innerHTML = '<li>No student records found in the database.</li>';
        return;
    }

    // 5. Populate the HTML list with fetched data
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `
            ID: ${student.student_id} | 
            Name: ${student.first_name} ${student.last_name} | 
            Dept ID: ${student.dept_id}
        `;
        studentList.appendChild(listItem);
    });
}

// Run the function when the page loads
fetchAndDisplayStudents();
