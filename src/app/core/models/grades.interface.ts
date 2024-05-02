export interface IGrades {
    id: number;
    courseId: number;
    date: string;
    students: IGradeStudent[];
    comments?: string;
}
export interface IGradeStudent {
    id: number;
    status: string;
}
 export const grades: IGrades[] = [
    {
        id: 1,
        courseId: 1,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'A'
            },
            {
                id: 2,
                status: 'B'
            },
            {
                id: 3,
                status: 'C'
            }
        ],
        comments: 'Buen trabajo!'
    },
    {
        id: 2,
        courseId: 2,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'A'
            },
            {
                id: 2,
                status: 'B'
            },
            {
                id: 3,
                status: 'C'
            }
        ],
        comments: 'Buen trabajo!'
    },
    {
        id: 3,
        courseId: 3,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'A'
            },
            {
                id: 2,
                status: 'B'
            },
            {
                id: 3,
                status: 'C'
            }
        ],
        comments: 'Buen trabajo!'
    },
    {
        id: 4,
        courseId: 4,
        date: '2021-05-01',
        students: [
            {
                id: 1,
                status: 'A'
            },
            {
                id: 2,
                status: 'B'
            },
            {
                id: 3,
                status: 'C'
            }
        ],
        comments: 'Buen trabajo!'
    }
];