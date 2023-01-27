import { AddEmployee } from "./EmployeeTypes"

export const addEmployee = (employee) => {
    return {
        type: AddEmployee,
        employee
    }
}