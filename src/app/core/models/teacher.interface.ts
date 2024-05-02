export interface ITeacher {
    id: number;
    courses: courses[];
    name: string;
    surname: string;
    email: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
}
 export interface courses {
    id: number;
    name: string;
    scheduleId: number;
    schedule: string;
}
/*
const teacher: ITeacher = {
    id: 1,
    courses: [
        {
            id: 1,
            name: 'Matematicas',
            scheduleId: 1,
            schedule: 'Lunes y Miercoles de 8:00 a 10:00'
        },
        {
            id: 2,
            name: 'Fisica',
            scheduleId: 2,
            schedule: 'Martes y Jueves de 8:00 a 10:00'
        }
    ],
    name: 'Juan',
    surname: 'Perez',
    email: 'juan.perez@gmail.com',
    phone: '098123456',
    address: 'Calle 123',
    city: 'Montvideo',
    state: 'Montvideo',
    zip: '28001'
};
*/