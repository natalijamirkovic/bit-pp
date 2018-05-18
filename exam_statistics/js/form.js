var subjectSelect = document.querySelector("#subject-select");
var nameInput = document.querySelector("#name");
var gradeSelect = document.querySelector("#grade-select");
var errElement = document.querySelector("#error");
var addButton = document.querySelector("#add");

function FillSubjectSelect(report){
  var subjectsOptions = [];
  report.listOfSubjects.forEach(function(subjectName){
    var option = document.createElement("option");
    option.setAttribute("value",subjectName);
    option.textContent = subjectName;
    subjectsOptions.push(option);
  });
  subjectsOptions.forEach(function(option){
    subjectSelect.appendChild(option);
  });
}

function collectAndValidateData() {
  var subjectValue = subjectSelect.value;
  var nameValue = nameInput.value;
  var gradeValue = parseInt(gradeSelect.value);
  var fullNameArr = nameValue.split(" ");

  if (fullNameArr.length !== 2) {
    errElement.textContent = "Invalid name input!";
    return;
  }
  if (!subjectValue) {
    errElement.textContent = "Invalid subject input!";
    return;
  }
  if (!gradeValue) {
    errElement.textContent = "Invalid grade input!";
    return;
  }
  errElement.textContent = "";

  for(var i = 0; i<fullNameArr.length; i++) {
    fullNameArr[i] = fullNameArr[i].trim();
    fullNameArr[i] = fullNameArr[i].charAt(0).toUpperCase() + fullNameArr[i].slice(1);
  }

  var student = new Student(fullNameArr[0],fullNameArr[1]);
  var subject = new Subject(subjectValue);
  var exam = new Exam(subject,student,gradeValue);
  report.addExam(exam);
}

function updateList() {

}
