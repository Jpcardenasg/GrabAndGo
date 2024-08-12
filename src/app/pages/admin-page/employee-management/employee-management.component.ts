import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { Employee, EmployeeField, EmployeeResults } from '../../../interfaces/Employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../../services/employee.service';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from '../../../components/modal/modal.component';
import { InputComponent } from '../../../components/ui/input/input.component';
import { MainButtonComponent } from '../../../components/ui/main-button/main-button.component';

@Component({
    selector: 'app-employee-management',
    standalone: true,
    imports: [AsyncPipe, ManagementBarComponent, ModalComponent, InputComponent, MainButtonComponent],
    templateUrl: './employee-management.component.html',
    styleUrl: './employee-management.component.css'
})
export class EmployeeManagementComponent implements OnInit {

    @Input() title?: string;

    public employeeList$!: Observable<EmployeeResults>;
    public selectedEmployee: Employee | null = null;
    public modalLabel: string = "Save";

    constructor(private service: EmployeeService) { };

    ngOnInit(): void {
        this.employeeList$ = this.service.getEmployeeList();
    }

    isModalOpen = false;

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    handleAdd() {
        this.selectedEmployee = null;
        this.modalLabel = "Save";
        this.openModal();;
    }

    handleEdit() {
        if (this.selectedEmployee) {
            this.modalLabel = "Edit";
            this.openModal();
        } else {
            alert('Please select a employee to edit.');
        }
    }

    handleDelete() {
        if (this.selectedEmployee) {
            this.service.deleteEmployee(this.selectedEmployee.id).subscribe({
                next: () => {
                    this.employeeList$ = this.service.getEmployeeList();
                    this.selectedEmployee = null;
                },
                error: (err) => console.error('Error deleting Employee:', err)
            });
        } else {
            alert('Please select a Employee to delete.');
        }
    }

    saveEmployee() {
        if (this.selectedEmployee) {
            if (this.modalLabel === "Save") {
                this.service.saveEmployee(this.selectedEmployee).subscribe({
                    next: () => {
                        this.employeeList$ = this.service.getEmployeeList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error saving Employee:', err)
                });
            } else if (this.modalLabel === "Edit") {
                this.service.updateEmployee(this.selectedEmployee.id, this.selectedEmployee).subscribe({
                    next: () => {
                        this.employeeList$ = this.service.getEmployeeList();
                        this.closeModal();
                    },
                    error: (err) => console.error('Error updating employee:', err)
                });
            }
        }
    }

    getFieldValue(employee: Employee | null, fieldName: string): any {
        return employee ? employee[fieldName as keyof Employee] : '';
    }

    selectEmployee(employee: Employee) {
        this.selectedEmployee = employee;

    }

    employeeFields: EmployeeField[] = [
        { header: "ID", type: "number", name: "id" },
        { header: "Name", type: "string", name: "name" },
        { header: "Last Name", type: "string", name: "lastName" },
        { header: "Email", type: "string", name: "email" },
        { header: "Extension", type: "string", name: "extension" },
        { header: "Position", type: "string", name: "position" },
        { header: "User ID", type: "string", name: "user" },
        { header: "Boss ID", type: "number", name: "boss" },
        { header: "Office ID", type: "number", name: "office" }
    ];

}
