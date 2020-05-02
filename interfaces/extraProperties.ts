// However, a better approach might be to add a string index signature 
// if you're sure that the object can have some extra properties that are used in some special way. 
// If SquareConfigs can have color and width properties with the above types, but could also have any number of other properties, 
// then we could define it like so:

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}