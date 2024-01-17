
const employee = {
    name: "Tamika Johnson",
    streetAddress: "1044 Miraflores"
}
console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key,value) {
    const newUpdate = {...employee, [key]: value}
    return(newUpdate)
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return(employee)
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
}