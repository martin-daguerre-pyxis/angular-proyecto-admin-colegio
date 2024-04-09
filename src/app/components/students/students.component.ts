import { Component, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StudentsList } from './students.interface';
import { ELEMENT_DATA } from './students.data';
import { MatDialog } from '@angular/material/dialog';
import { StudentAbmComponent } from '../student-abm/student-abm.component';

const carrerasColor = [
  { id: 1, name: 'Ingeniería en Sistemas', color: 'blue' },
  { id: 2, name: 'Ingeniería Industrial', color: 'green' },
  { id: 3, name: 'Licenciatura en Administración', color: 'red' },
];

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatIconModule],
})
export class StudentsComponent {
  @ViewChild(MatTable)
  table: MatTable<StudentsList> | undefined;

  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'fechaNac',
    // 'edad', // ToDo
    'carrera',
    'semestre',
    'promedio',
    'acciones',
  ];
  dataSource = [...ELEMENT_DATA];

  constructor(public dialog: MatDialog) {}

  openDialog(data: StudentsList | null): void {
    const dialogRef = this.dialog.open(StudentAbmComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Se cierra el Modal');
      console.log('Resultado:', result || 'No');
    });
  }

  editData(element: StudentsList) {
    this.openDialog(element);
  }
  deleteData(element: StudentsList) {
    console.log('Borrar elemento', element);
  }
  setColor(color: number = 0) {
    let newClass = '';
    const carrera = carrerasColor.find((c) => c.id === color);
    if (carrera) {
      newClass = 'bg-' + carrera.color + '-500';
    }
    return newClass;
  }
}
