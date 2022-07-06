
const categories = ['Salty', 'Sweet', 'Healthy', 'Drinks'];
const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

//Randomized using fisher-yates shuffle
function randomizer(arr){
    // console.log("original array is " + people);
    var i = arr.length,
        j = 0,
        temp;
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            //swaps random element with current element
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log("Final Array is  " + arr);
    // for ( let i = 0; i<arr1.length ; i++ ) {
    //     let num1 = Math.floor(Math.random() * (arr1.length) );
    //     console.log("\n i is " + i + "\n");

    //     console.log("Random num1 is " + num1);
        // let string1 = 
    // }
        return arr;
};

// Sets people to each chore repeated
function choreAsigner (arr) {
    var arrays = (arr.length / 4);
    var index = 0;
    for (let i = 0 ; i < arrays; i++) {
        console.log("\n Week "  + (i+1));
        var chores =[];
        console.log("Sweet: " + arr[index] );
        index++;
        console.log("Salty: " + arr[index]);
        index++
        console.log("Healthy: " + arr[index]);
        index++;
        console.log("Drinks: " + arr[index]);
        index++
    } 

// console.log("Number of arrays needed is " + arrays);
// while (arrays >= 0) {

// }
}
const newArray = randomizer(people);
choreAsigner(newArray);

// console.log(people);
