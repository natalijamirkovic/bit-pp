var data = (function (){

function NameOfSubjects(name) {
    this.name = name;
} 

NameOfSubjects.prototype.getSubjectName = function() {
    return this.name;
}

function Student(name, surname) {
    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function() {
    return this.name + this.surname;
}

function Grade(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
}

Grade.prototype.getExamInfo = function() {
    return this.student.getStudentData + this.nameOfSubjects.getSubjectName;

Grade.prototype.hasPassed = function(){
    if(this.grade > 5) {
        return passed 
    } else {
        return failed;
    }
}

}
return {
   
}
})();   