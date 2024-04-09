import { Component, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StudentsList } from '../students/students.interface';

@Component({
  selector: 'app-student-abm',
  templateUrl: './student-abm.component.html',
  styleUrls: ['./student-abm.component.css'],
})
export class StudentAbmComponent {
  // @Input()
  // id!: number;

  onNoClick(): void {
    this.dialogRef.close();
  }

  studentForm: FormGroup;
  emailErrorMessage = 'El email no parece válido';
  edadErrorMessage = 'Que raro la edad es generalmente entre 18 y 99, revisa por favor!';
  promedioErrorMessage = 'El promedio va de 0 a 10 y puede contener decimales usando el punto como separador';
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<StudentAbmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentsList
  ) {
    this.studentForm = this.formBuilder.group({
      email: this.formBuilder.control(data.email, [Validators.email]),
      nombre: this.formBuilder.control(data.nombre, [Validators.required]),
      apellido: this.formBuilder.control(data.apellido, [Validators.required]),
      edad: this.formBuilder.control(data.edad, [Validators.required,Validators.min(18),Validators.max(99)]),
      promedio: this.formBuilder.control(data.promedio, [Validators.required,Validators.min(0),Validators.max(10)]),
    });
  }
}
