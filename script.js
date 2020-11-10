// Chess board exercise

// In order to represent a chessboard in a program, write a chessboard function that will return an array of arrays containing the squares coordinates.
// [
//     ['a - 1', 'a - 2', 'a - 3', 'a - 4', 'a - 5', 'a - 6', 'a - 7', 'a - 8'],
//     ['b - 1', 'b - 2', 'b - 3', 'b - 4', 'b - 5', 'b - 6', 'b - 7', 'b - 8'],
//     ...,
//     ['h - 1', 'h - 2', 'h - 3', 'h - 4', 'h - 5', 'h - 6', 'h - 7', 'h - 8'],
// ]

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let chessBoard = letters.map(letter => {
    let row = [];
    for (let i = 0; i < letters.length; i++) {
        row.push(`${letter} - ${i + 1}`);
    }
    return row;
    // console.log(row);
});
console.log(chessBoard);



// for (let i = 1; i <= letters.length; i++) {
//     let row = [];
//     letters.forEach((letter, index) => {
//         console.log(`${letter} - ${index + 1}`);
//     })
//     chessBoard.push(row);
// }
// console.log(chessBoard);



// for (let i = 1; i <= letters.length; i++) {
//     let row = [];
//     for (let j = 1; j <= size; j++) {
//         row.push(`${letters[i - 1]} - ${j}`);
//     }
//     chessBoard.push(row);
// }
// console.log(chessBoard);


// let chessboard = num => {
//     let output = "";
//     for (i = 1; i <= num; i++) {
//         for (j = 1; j <= num; j++) {
//             ((i + j) % 2 == 0 ? output += " " : output += "#")
//         }
//         output += "\n"
//     }
//     console.log(output);
// }
// console.log(chessboard(8));

