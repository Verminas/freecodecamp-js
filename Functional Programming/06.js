// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let copy = [...bookList];
  copy.push(bookName);
  return copy;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let copy = [...bookList];
  const book_index = copy.indexOf(bookName);
  if (book_index >= 0) {
    copy.splice(book_index, 1);
    return copy;

    // Change code above this line
    }
}
