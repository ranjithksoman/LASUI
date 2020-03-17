export class Task {

    id: number;
    title: string;
    Resource : Resource [];
    Constraint : Constraint[];
    Subactivities : string[];
}
export class Resource{
    id : string;
    type : string;
    propertytype: string;
    propertyvalue: Number;
    server: string;

}
export class Constraint {
    id : string;
    type : string;


}
