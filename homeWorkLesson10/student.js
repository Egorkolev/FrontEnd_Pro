class Student {
    constructor(firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.grades = [];
      this.attendance = new Array(25).fill(undefined);
      this.totalGrades = 0;
      this.totalAttendance = 0;
    }
  
    calculateAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    addGrade(grade) {
      this.grades.push(grade);
      this.totalGrades += grade;
    }
  
    present() {
      const lastIndex = this.attendance.findIndex(item => item === undefined);
      if (lastIndex !== -1) {
        this.attendance[lastIndex] = true;
        this.totalAttendance++;
      } else {
        console.log("Масив відвідуваності повністю заповнений.");
      }
    }
  
    absent() {
      const lastIndex = this.attendance.findIndex(item => item === undefined);
      if (lastIndex !== -1) {
        this.attendance[lastIndex] = false;
      } else {
        console.log("Масив відвідуваності повністю заповнений.");
      }
    }
  
    calculateAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      return this.totalGrades / this.grades.length;
    }
  
    calculateAverageAttendance() {
      return this.totalAttendance / this.attendance.length;
    }
  
    summary() {
      const averageGrade = this.calculateAverageGrade();
      const averageAttendance = this.calculateAverageAttendance();
  
      if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодець!";
      } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Добре, але можна краще";
      } else {
        return "Редиска!";
      }
    }
  }

  const student1 = new Student("Іван", "Петров", 1998);
  student1.addGrade(95);
  student1.addGrade(85);
  student1.addGrade(90);
  student1.present();
  student1.present();
  student1.present();
  student1.present();
  student1.absent();
  
  console.log(`Вік: ${student1.calculateAge()}`);
  console.log(`Середня оцінка: ${student1.calculateAverageGrade().toFixed(2)}`);
  console.log(`Середня відвідуваність: ${student1.calculateAverageAttendance().toFixed(2)}`);
  console.log(`Висновок: ${student1.summary()}`);