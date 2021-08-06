//Global Name Space Pollution causes Name collision.

function student(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.getFullName = function () {
        return this.fname + " " + this.lname;
    }
};