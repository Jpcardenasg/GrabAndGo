import { Component, Input, OnInit } from '@angular/core';
import { ManagementBarComponent } from '../../../components/management-bar/management-bar.component';
import { EmployeeField, EmployeeResults } from '../../../interfaces/Employee';
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

    employeeFields: EmployeeField[] = [
        { header: "ID", type: "number", name: "id" },
        { header: "Name", type: "string", name: "name" },
        { header: "Last Name 1", type: "string", name: "lastName1" },
        { header: "Last Name 2", type: "string", name: "lastName2" },
        { header: "Email", type: "string", name: "email" },
        { header: "Extencion", type: "string", name: "extencion" },
        { header: "Position", type: "string", name: "position" },
        { header: "User", type: "string", name: "user" },
        { header: "Telephone", type: "number", name: "telephone" },
        { header: "Boss", type: "number", name: "boss" },
        { header: "Office", type: "number", name: "office" }
    ];

}
