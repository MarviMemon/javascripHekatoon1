function addStudent(){
    const student_name = document.getElementById("student-name").value;
    const father_name = document.getElementById("father-name").value;
    const rollNo = document.getElementById("rollNo").value;
    const contact = document.getElementById("contact").value;
    const cnic = document.getElementById("cnic").value;
    const course_name = document.getElementById("course-name").value;
    console.log("student data >> ", student_name, father_name, rollNo, contact, cnic, course_name);
    // alert("student added");
}

const student_form = document.getElementById("student-form");

student_form.addEventListener("submit",addStudent());
