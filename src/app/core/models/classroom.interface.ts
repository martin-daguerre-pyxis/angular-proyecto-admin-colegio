export interface IClassroom {
    id: number;
    name: string;
    capacity: number;
    teacher?: number;
    students?: number[];
}

export const classroom: IClassroom[] = [
    {
        id: 1,
        name: 'Aula 1',
        capacity: 20,
        teacher: 1,
        students: [1, 2, 3]
    },
    {
        id: 2,
        name: 'Aula 2',
        capacity: 20,
        teacher: 2,
        students: [4, 5, 6]
    },
    {
        id: 3,
        name: 'Aula 3',
        capacity: 20,
        teacher: 3,
        students: [7, 8, 9]
    },
    {
        id: 4,
        name: 'Aula 4',
        capacity: 20,
        teacher: 4,
        students: [10, 11, 12]
    },
    {
        id: 5,
        name: 'Aula 5',
        capacity: 20,
        teacher: 5,
        students: [13, 14, 15]
    },
    {
        id: 6,
        name: 'Aula 6',
        capacity: 20,
        teacher: 6,
        students: [16, 17, 18]
    }
];