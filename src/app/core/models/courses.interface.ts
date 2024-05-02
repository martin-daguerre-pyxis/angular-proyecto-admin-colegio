export interface ICourses {
    id: number;
    name: string;
    schedule?: number;
    teacher?: number;
    classRoom?: number;
    students?: number[];
}
/*
const courses: ICourses[] = [
    {
        id: 1,
        name: 'Matematicas',
        schedule: 1,
        teacher: 1,
        classRoom: 1,
        students: [1, 2, 3]
    },
    {
        id: 2,
        name: 'Fisica',
        schedule: 2,
        teacher: 2,
        classRoom: 2,
        students: [4, 5, 6]
    },
    {
        id: 3,
        name: 'Quimica',
        schedule: 3,
        teacher: 3,
        classRoom: 3
    },
    {
        id: 4,
        name: 'Biologia',
        schedule: 4,
        teacher: 4,
        classRoom: 4,
        students: [7, 8, 9]
    },
    {
        id: 5,
        name: 'Historia',
        schedule: 5,
        teacher: 5,
        classRoom: 5,
        students: [10, 11, 12]
    },
    {
        id: 6,
        name: 'Geografia',
        schedule: 6,
        teacher: 6,
        classRoom: 6,
        students: [13, 14, 15]
    },
    {
        id: 7,
        name: 'Ingles',
        schedule: 7,
        teacher: 7,
        classRoom: 7,
        students: [16, 17, 18]
    },
    {
        id: 8,
        name: 'Literatura',
        schedule: 8,
        teacher: 8,
        classRoom: 8,
        students: [19, 20, 21]
    },
    {
        id: 9,
        name: 'Educacion Fisica',
        schedule: 9,
        teacher: 9,
        classRoom: 9,
        students: [22, 23, 24]
    },
    {
        id: 10,
        name: 'Arte',
        schedule: 10,
        teacher: 10,
        classRoom: 10,
        students: [25, 26, 27]
    }
];
*/