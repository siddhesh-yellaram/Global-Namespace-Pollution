//This function will override the existing function because js does not support function overloading. 
//This can lead to Global Namespace Pollution.

function student(fname, mname, lname) {
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.getFullName = function () {
        return this.fname + " " + this.mname + " " + this.lname;
    }
}
