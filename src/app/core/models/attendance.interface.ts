export interface IAttendance {
    id: number;
    courseId: number;
    date: string;
    students?: IAttendanceStudent[];
}
export interface IAttendanceStudent {
    id: number;
    status: string;
}
export const attendance: IAttendance[] = [
    {
        id: 1,
        courseId: 1,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'present'
            },
            {
                id: 2,
                status: 'absent'
            },
            {
                id: 3,
                status: 'present'
            }
        ]
    },
    {
        id: 2,
        courseId: 2,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'absent'
            },
            {
                id: 2,
                status: 'absent'
            },
            {
                id: 3,
                status: 'absent'
            }
        ]
    },
    {
        id: 3,
        courseId: 3,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'present'
            },
            {
                id: 2,
                status: 'present'
            },
            {
                id: 3,
                status: 'present'
            }
        ]
    },
    {
        id: 4,
        courseId: 4,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'absent'
            },
            {
                id: 2,
                status: 'absent'
            },
            {
                id: 3,
                status: 'absent'
            }
        ]
    },
    {
        id: 5,
        courseId: 5,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'present'
            },
            {
                id: 2,
                status: 'present'
            },
            {
                id: 3,
                status: 'present'
            }
        ]
    },
    {
        id: 6,
        courseId: 6,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'absent'
            },
            {
                id: 2,
                status: 'absent'
            },
            {
                id: 3,
                status: 'absent'
            }
        ]
    },
];