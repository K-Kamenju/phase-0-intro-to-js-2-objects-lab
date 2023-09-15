// Write your solution in this file!
const employee = {}
employee.name = "Sam"
employee.streetAddress = "11 Broadway"

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value
    return updatedEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

employee["streetAddress"] = "12 Broadway"

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

newEmployee = deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

delete employee["name"]