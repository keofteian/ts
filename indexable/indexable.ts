// Similarly to how we can use interfaces to describe function types, 
// we can also describe types that we can "index into" like a[10], or ageMap["daniel"]. 
// Indexable types have an index signature that describes the types we can use to index into the object, 
// along with the corresponding return types when indexing. Let's take an example:

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// Above, we have a StringArray interface that has an index signature. 
// This index signature states that when a StringArray is indexed with a number, it will return a string.

// There are two types of supported index signatures: string and number. 
// It is possible to support both types of indexers, but the type returned 
// from a numeric indexer must be a subtype of the type returned from the string indexer. 
// This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. 
// That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string),
//  so the two need to be consistent.

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a 'string' will sometimes get you a Dog!

interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
}

// While string index signatures are a powerful way to describe the "dictionary" pattern, 
// they also enforce that all properties match their return type. This is because a string index declares that obj.
// property is also available as obj["property"]. In the following example, name's type does not match the string index's type, 
// and the type-checker gives an error:

interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer
}
// Finally, you can make index signatures readonly in order to prevent assignment to their indices:

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!
// You can't set myArray[2] because the index signature is readonly.