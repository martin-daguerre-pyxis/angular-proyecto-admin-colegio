export interface IStudent {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  fechaNac: string;
  edad: number;
  carrera: string;
  carrera_id: number;
  semestre?: number;
  promedio?: number;
  createAt?: number;
}
