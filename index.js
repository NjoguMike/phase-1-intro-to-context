// Your code here
function createEmployeeRecord(array){
   let employeeRec = {firstName: array[0],
                      familyName: array[1],
                      title: array[2],
                      payPerHour: array[3],
                      timeInEvents: [],
                      timeOutEvents:[]
                    }
   return employeeRec
}

function createEmployeeRecords(array){
    let updatedRec = array.map(createEmployeeRecord)
    return updatedRec
}

function createTimeInEvent(obj, dateStamp){
    
    let dateArr = dateStamp.split(' ')
    obj.timeInEvents.push({type : "TimeIn",
                            hour: parseInt(dateArr[1]),
                            date: dateArr[0]})
            
    return obj                
}

function createTimeOutEvent(obj, dateStamp){
    
    let dateArr = dateStamp.split(' ')
    obj.timeOutEvents.push({type : "TimeOut",
                            hour: parseInt(dateArr[1]),
                            date: dateArr[0]})
            
    return obj                
}

function hoursWorkedOnDate(obj,date){
    let logIns, logOuts, logIn, logOut, hoursWorked

    logIns = obj.timeInEvents.find((obj1)=> obj1.date === date)
    logOuts = obj.timeOutEvents.find((obj1)=> obj1.date === date)

    logIn = parseInt(logIns.hour)
    logOut = parseInt(logOuts.hour)

    return hoursWorked = (logOut - logIn)/100
    
   }
    

function wagesEarnedOnDate(obj,date){
    let pay = (hoursWorkedOnDate(obj,date) * obj.payPerHour)
    return pay
}


function allWagesFor(obj){
    let dates, pays

    dates = [] 
    pays = []
    const dateObj = obj.timeInEvents
    for(let logIn of dateObj){
        dates.push(logIn.date) 
    }

    return dates.reduce((total,date)=> total + wagesEarnedOnDate(obj,date),0)
}

function calculatePayroll(array){
    let employeePay = array.map(arr => allWagesFor(arr))
    return employeePay.reduce((total,value)=> total += value)
}


// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
// let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
// console.log(createTimeInEvent(bpRecord,"2014-02-27 1400"))