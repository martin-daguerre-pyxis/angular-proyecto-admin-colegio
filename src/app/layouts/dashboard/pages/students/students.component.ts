import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ELEMENT_DATA } from './students.data';
import { CAREERS_COLOR, IStudent } from '../../../../core';
// import { AbmComponent } from './components/abm/abm.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
})

export class StudentsComponent {
  @ViewChild(MatTable)
  table: MatTable<IStudent> | undefined;

  displayedColumns: string[] = [
    'acciones',
    'nombre',
    'apellido',
    'fechaNac',
    'carrera',
    'semestre',
    'promedio',
  ];
  dataSource = [...ELEMENT_DATA];

  constructor(public dialog: MatDialog) { }

  openDialog(data: IStudent | null): void {
    const editingItem = data;
/*     this.dialog
      .open(AbmComponent, {
        data: data,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingItem) {
              // ACTUALIZAR 
              this.dataSource = this.dataSource.map((u) =>
                u.id === editingItem.id ? { ...u, ...result } : u
              );
            } else {
              // CREAR
              result.id = new Date().getTime().toString().substring(0, 3);
              result.createAt = new Date();
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      }); */
  }

  editData(element: IStudent) {
    this.openDialog(element);
  }

  deleteData(id: number): void {
    if (confirm('Esta seguro?')) {
      this.dataSource = this.dataSource.filter((u) => u.id != id);
    }
  }

  setColor(color: number = 0) {
    let newClass = '';
    const career = CAREERS_COLOR.find((c) => c.id === color);
    if (career) {
      newClass = 'bg-' + career.color + '-500';
    }
    return newClass;
  }

}
