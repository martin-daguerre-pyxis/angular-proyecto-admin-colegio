import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef, MAT_DIALOG_DATA, MatDialog
} from '@angular/material/dialog';
import { StudentsList } from '../../students.interface';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html'
})
export class AbmComponent {

  onNoClick(): void {
    this.dialogRef.close();
  }

  studentForm: FormGroup;

  // Error Messages
  emailErrorMessage = 'El email no parece válido';
  edadErrorMessage = 'Que raro la edad es generalmente entre 18 y 99, revisa por favor!';
  promedioErrorMessage = 'El promedio va de 0 a 10 y puede contener decimales usando el punto como separador';

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AbmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentsList
  ) {
    this.studentForm = this.formBuilder.group({
      email: this.formBuilder.control(data.email, [Validators.email, Validators.required]),
      nombre: this.formBuilder.control(data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      apellido: this.formBuilder.control(data.apellido, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      edad: this.formBuilder.control(data.edad, [Validators.required, Validators.min(18), Validators.max(99), Validators.pattern('^[0-9]*$')]),
      promedio: this.formBuilder.control(data.promedio, [Validators.required, Validators.min(0), Validators.max(10), Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
    });
    
  }
  formatLabelPercent(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
