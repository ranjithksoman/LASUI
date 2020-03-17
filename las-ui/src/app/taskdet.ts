import { Task, Resource, Constraint } from './task'


export const Resourcedetails: Resource[] = [

    {
        id: 'R1',
        type: 'Excavator + Breaker',
        propertytype:'capacity',
        propertyvalue: 22000,
        server: 'localhost:5200'
    },
    {
        id: 'R2',
        type: 'Dumper',
        propertytype:'capacity',
        propertyvalue: 6000,
        server: 'localhost:5200'


    },
    {
        id: 'R3',
        type: 'Crawler Crane',
        propertytype:'Cranecapacity',
        propertyvalue: 5000,
        server: 'localhost:7200'


    },
    {
        id: 'R4',
        type: 'ABI TM 14/17 Leader Rig',
        propertytype:'Weight',
        propertyvalue: 60000,
        server: 'localhost:6200'
    },
    {
        id: 'R5',
        type: 'Forklift',
        propertytype:'capacity',
        propertyvalue: 3000,
        server: 'localhost:7200'
    },
    {
        id: 'R7',
        type: 'Excavator',
        propertytype:'Capacity',
        propertyvalue: 8000,
        server: 'localhost:6200'
    },
    {
        id: 'R7',
        type: 'Roller',
        propertytype:'Capacity',
        propertyvalue: 8000,
        server: 'localhost:6200'
    },
    {
        id: 'R8',
        type: 'Excavator',
        propertytype:'Capacity',
        propertyvalue: 25000,
        server: 'localhost:6200'
    },
    {
        id: 'R9',
        type: 'Telescopic Crane',
        propertytype:'CraneCapacity',
        propertyvalue: 40000,
        server: 'localhost:6200'
    },
    {
        id: 'R10',
        type: 'Pile cropper',
        propertytype:'Capacity',
        propertyvalue: 1,
        server: 'localhost:6200'
    },
    {
        id: 'R11',
        type: 'Excavator',
        propertytype:'Capacity',
        propertyvalue: 5000,
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
        title: 'Phase 1 (WTP/STP)',
        Resource: [Resourcedetails[0], Resourcedetails[1]],
        Constraint: [Constraintdetails[3]],
        // tslint:disable-next-line:max-line-length
        Subactivities : ['b5 beam','Pour Area 6 (Middle)~130m3','Placing Steel Bottom Matt B6-3','Placing Steel Bottom Matt B6-2','Placing Steel Bottom Matt B6-1','Placing Bottom Matt Steel (Outside Tanks)','Concrete downstand Beam','Install Recess B6-3 + Levelled','Install Recess B6-2 + Levelled','Install Recess B6-1 + Levelled','Install Perimeter Shutters','Concrete Curing (To Strike Shutters)','Placing Steel Top Matt B6-3','Placing Steel Top Matt B6-2','Placing Steel Top Matt B6-1','Stike Shutters (All bases and Perimeter)','Steel delivery','Install Screed Rails + Levels','Prep area and blind southwest near siltbuster','Pour Watertight Concrete in Recess (Following Tank Install)','Placing Top Matt Steel (Outside Tanks)','Install Screed Rails + Levels','Concrete Curing','Placing Steel Bottom Matt B3-2','Placing Steel Bottom Matt B4','Placing Bottom Matt Steel (Outside Tanks)','Excavate and surface prep for civil works (750mm Trench for recess)','Stike Shutters (All bases and Perimeter)','Prefabrication of Recess B5','Blinding','Excavate and surface prep for civil works','Pour walls','Install Recess B3-2','Install Recess B4','Placing Steel Top Matt B3-2','Placing Steel Top Matt B4','Placing Top Matt Steel (Outside Tanks)','Install Perimeter Shutters','Excavate WTP Temporary Slab  LA','Steel delivery','Install Screed Rails + Levels','Pour','desanding building slab','place steel for desanding building slab','Concrete Curing','steel delivery','Blinding WTP Temporary Slab LA','Stike Shutters (All bases and Perimeter)','placing steel for b5 beam','b5 beam pour','Placing Top Matt Steel (Outside Tanks)','Install perimeter shutters','Install screed rails+shutters','concrete curing','install shutters of 2 No trommel walls','steel fix 2 No trommel walls','LA - move site storage','install shutter','strike shutters']

    },
    {
        id: 2,
        title: 'BIN A',
        Resource: [Resourcedetails[4], Resourcedetails[7],Resourcedetails[8],Resourcedetails[9],Resourcedetails[10]],
        Constraint: [Constraintdetails[3],Constraintdetails[0],Constraintdetails[1],Constraintdetails[2]],
        // tslint:disable-next-line:max-line-length
        Subactivities : ['Steel Delivery Bin A','Excavate Bin ( 6m x 11.2m x 4m)','Excavate to Prop Level & Create sump','Crop Piles and Cut Steel','Install River Wall Connection','Install Prop','Excavate to Base Level','Crop Piles - Ensure reo left for slab tie ins','Pour Blinding','Final Trim Piles - Integrity Test - Prep Base','Bin A Pour 2 - Kicker','Remove Propping','Inspection','Bin A Pour 3 - First wall lift','Scabble']

    },
    {
        id: 3,
        title: 'BIN B',
        Resource: [Resourcedetails[4], Resourcedetails[7],Resourcedetails[8],Resourcedetails[9],Resourcedetails[10]],
        Constraint: [Constraintdetails[0],Constraintdetails[3],Constraintdetails[2]],
        // tslint:disable-next-line:max-line-length
        Subactivities : ['Steel Delivery Bin A','Excavate Bin ( 6m x 11.2m x 4m)','Excavate to Prop Level & Create sump','Crop Piles and Cut Steel','Install River Wall Connection','Install Prop','Excavate to Base Level','Crop Piles - Ensure reo left for slab tie ins','Pour Blinding','Final Trim Piles - Integrity Test - Prep Base','Bin A Pour 2 - Kicker','Remove Propping','Inspection','Bin A Pour 3 - First wall lift','Scabble','Bin B','Construct Muck Bins','Steel Base and Wall Starters','Inspection','Bin B Pour 1 - Base','Formwork For Kicker','Bin B Pour 2 - Kicker','Curing time (stike shutters)','Remove Propping','Steel Walls','Pour to Underside Double shutters']

    },
    {
        id: 4,
        title: 'BIN C',
        Resource: [Resourcedetails[4], Resourcedetails[7],Resourcedetails[8],Resourcedetails[9],Resourcedetails[10]],
        Constraint: [Constraintdetails[0],Constraintdetails[3],Constraintdetails[2],Constraintdetails[1]],
        // tslint:disable-next-line:max-line-length
        Subactivities : ['Final Trim Piles - Integrity Test - Prep Base','Steel Base and Wall Starters','Inspection','Bin C Pour 1 - Base','Formwork For Kicker','Curing time (stike shutters)','Bin C Pour 2 - Kicker','Remove Propping','LA - Remove shutters']


    },
    {
      id: 5,
      title: 'Piling Platform',
      Resource: [Resourcedetails[0], Resourcedetails[5],Resourcedetails[6],Resourcedetails[7]],
      Constraint: [Constraintdetails[0],Constraintdetails[3],Constraintdetails[2],Constraintdetails[1]],
      Subactivities : ['Install Pile Platform']

  }


];
export const constraintypes: string[] = ['precedence','disjunctive','logical','discrete'];
export const resourcetypes: string[] = ['Module','Truck','Towercrane'];
export const propertytype: string[] = ['Crane capacity','Truck Capacity','Module weight'];
