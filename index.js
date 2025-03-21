/* Your Code Here */

/*
 We're giving you arr function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for arr function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
const createEmployeeRecords = function(arroarr){
    const emptyarr = [];
    return arroarr.reduce((acc, cur)=>{
        acc.push(createEmployeeRecord(cur));
        return acc;
    }, emptyarr)
}

const createTimeInEvent = function(datestamp){
    const time = datestamp.split(" ");
    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(time[time.length-1]),
        date: time[0]
    })
    return this;
}

const createTimeOutEvent = function(datestamp){
    const time = datestamp.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(time[time.length-1]),
        date: time[0]
    })
    return this;
}

const hoursWorkedOnDate = function(datestamp){
    let hour = 0;
    for (let i = 0; i < this.timeInEvents.length; i++){
        if (this.timeInEvents[i].date === datestamp){
            hour = this.timeOutEvents[i].hour - this.timeInEvents[i].hour;
        }
    }
    return hour / 100;
}

const wagesEarnedOnDate = function(datestamp){
    return hoursWorkedOnDate.call(this, datestamp) * this.payPerHour;
}

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find((element)=>{
        if (element.firstName === firstName){
            return element
        }
    })

}

const calculatePayroll = function(employeeRecords){
    let allWages = 0;
    return employeeRecords.reduce((acc, cur)=>{
        acc += allWagesFor.call(cur)
        return acc
    }, allWages)
}   

