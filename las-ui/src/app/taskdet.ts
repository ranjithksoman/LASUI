import {Task} from './task'

export const Taskdetails: Task[]=[

    {
        id: 1,
        title: 'Lift Zone 1',
        Resource: [	'Cr1'	,	'M7'	,	'LD1'	],
        Constraint:[	'C1'	,	'C2'	,	'C4'	,	'C5'	]

    },
    {
        id: 2,
        title: 'Lift Zone 2',
        Resource: [	'Cr1'	,	'M1'	,	'LD1'	],
        Constraint:[	'C1'	,	'C2'	,	'C4'	,	'C5'	]

    },
    {
        id: 3,
        title: 'Lift Zone 3',        
        Resource: [	'Cr2'	,	'M2'	,	'LD2'	],
        Constraint:[	'C1'	,	'C2'	,	'C4'	,	'C5'	]

    },
    {
        id: 4,
        title: 'Lift Zone 4',
        Resource: [	'Cr3'	,	'M3'	,	'LD1'	],
        Constraint:[	'C1'	,	'C2'	,	'C4'	,	'C5'	]

    }


];