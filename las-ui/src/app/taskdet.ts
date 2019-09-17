import { Task, Resource, Constraint } from './task'


export const Resourcedetails: Resource[] = [

    {
        id: 'R1',
        type: 'Truck',
        propertytype:'capacity',
        propertyvalue: 5000,
        server: 'localhost:5200'
    },
    {
        id: 'R2',
        type: 'Truck',
        propertytype:'capacity',
        propertyvalue: 4000,
        server: 'localhost:5200'
    

    },
    {
        id: 'R3',
        type: 'Towercrane',
        propertytype:'Cranecapacity',
        propertyvalue: 5000,
        server: 'localhost:7200'
    

    },
    {
        id: 'R5',
        type: 'Module',
        propertytype:'Weight',
        propertyvalue: 4500,
        server: 'localhost:6200'
    },
    {
        id: 'R4',
        type: 'Towercrane',
        propertytype:'Cranecapacity',
        propertyvalue: 3000,
        server: 'localhost:7200'
    },
    {
        id: 'R6',
        type: 'Module',
        propertytype:'Weight',
        propertyvalue: 4500,
        server: 'localhost:6200'
    },
];

export const Constraintdetails: Constraint[]=[

    {
        id: 'C1',
        type: 'Precedence',
                
    },
    {
        id: 'C2',
        type: 'Disjunctive',
                
    },
    {
        id: 'C3',
        type: 'Discrete',
                
    },
    {
        id: 'C4',
        type: 'Logical',
                
    },
]; 
export const Taskdetails: Task[] = [

    {
        id: 1,
        title: 'Lift Zone 1',
        Resource: [Resourcedetails[0], Resourcedetails[2],Resourcedetails[3]],
        Constraint: [Constraintdetails[3]]

    },
    {
        id: 2,
        title: 'Lift Zone 2',
        Resource: [Resourcedetails[1], Resourcedetails[4],Resourcedetails[5]],
        Constraint: [Constraintdetails[3],Constraintdetails[0]]

    },
    {
        id: 3,
        title: 'Lift Zone 3',
        Resource: [Resourcedetails[0], Resourcedetails[2],Resourcedetails[5]],
        Constraint: [Constraintdetails[0],Constraintdetails[3],Constraintdetails[2]]

    },
    {
        id: 4,
        title: 'Lift Zone 4',
        Resource: [Resourcedetails[0], Resourcedetails[2],Resourcedetails[5]],
        Constraint: [Constraintdetails[0],Constraintdetails[3],Constraintdetails[2],Constraintdetails[1]]

    }


];
export const constraintypes: string[] = ['precedence','disjunctive','logical','discrete'];
export const resourcetypes: string[] = ['Module','Truck','Towercrane'];
export const propertytype: string[] = ['Crane capacity','Truck Capacity','Module weight'];