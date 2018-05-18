function Report() {
  this.date = new Date();
  this.listOfExams = [];
  this.listOfSubjects = ["Web", "JavaScript", "SPA"];
}


Report.prototype.addExam = function(exam){
  this.listOfExams.push(exam);
}


Report.prototype.getTotalExams = function() {
  return this.listOfExams.length;
};

Report.prototype.getNumberOfPassed = function() {
  var count = 0;
  this.listOfExams.forEach(function(exam) {
    if (exam.hasPassed()) {
      count++;
    }
  });
  return count;
};

Report.prototype.getMonthName = function() {
  var monthNumber = this.date.getMonth();
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[monthNumber];

}

Report.prototype.getNumberOfFailed = function() {
  var count = 0;
  this.listOfExams.forEach(function(exam) {
    if (!exam.hasPassed()) {
      count++;
    }
  });
  return count;
};

Report.prototype.getPercentageOfFailed = function() {
  return Math.round((100 * this.getNumberOfFailed()) / this.getTotalExams());
};

Report.prototype.deleteExam = function(id) {
  var copyArray = [];
  for (var i = 0; i < this.listOfExams.length; i++) {
    if (i !== id) {
      copyArray.push(this.listOfExams[i]);
    }
  }
  this.listOfExams = copyArray;
}
