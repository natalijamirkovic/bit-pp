function Person(name, surname) {
    this.name = name;
    this.surname = surname;
};

function Employee(name, surname, job, salary) {
    this.job = job;
    this.salary = salary;
    Person.call(this, name, surname)
};

function Developer(name, surname, job, salary, specialization) {
    this.specialization = specialization;
    Employee.call(this, name, surname, job, salary);
};

function Manager(name, surname, job, salary, departmant) {
    this.departmant = departmant;
    Employee.call(this, name, surname, job, salary);
};

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
};

Manager.prototype.getDepartment = function () {
    console.log(this.departmant);
};

Manager.prototype.changeDepartmant = function (newValue) {
    this.departmant = newValue;
};

Employee.prototype.getData = function () {
    return this.name + ", " + this.surname + ", " + this.salary;
};

Employee.prototype.getSalary = function () {
    console.log(this.salary);
};

Employee.prototype.increaseSalary = function () {
    return this.salary *= 1.1;
};

/*Task 2*/

function WebAPP(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

WebAPP.prototype.getData = function () {
    console.log(this.name + ", " + this.url + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
    ;
}

WebAPP.prototype.reactBased = function () {
    return this.technologies === "React";
}

MobileApp.prototype.getData = function () {
    console.log(this.name + ", " + this.technologies + ", " + this.licence + ", " + this.stars);
};

MobileApp.prototype.forAndroid = function () {
    return this.platforms === "Android";
};

WebAPP.prototype.isCCLicence = function() {
    return this.licence === "CC";
}

MobileApp.prototype.isCCLicence = function() {
    return this.licence === "CC";
}

WebAPP.prototype.like = function () {
    this.stars += 1;
}

MobileApp.prototype.like = function () {
    this.stars += 1;
}

WebAPP.prototype.showStars = function () {
    console.log(this.stars);
}

MobileApp.prototype.showStars = function () {
    console.log(this.stars);
}
