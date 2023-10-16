// const arraybook = [];
let main$$ = document.querySelector("main")
let section$$ = document.createElement("section")
const input$$ = document.querySelector(".searchingbar")
// input$$.addEventListener("input", () => searchBooks(input$$.value, books));

main$$.appendChild(section$$)

const getAllBooks = async () =>{
        const arraybook = [];
        const response = await fetch(`http://localhost:5051/book`, { method:"GET" });
        const result = await response.json();    
        // console.log(result)
            arraybook.push(result);
    //   console.log(arraybook);
    return arraybook;
}
    const printBooks = (books) =>{
        // console.log(books)
        for(const drawbooks of books){
            for (const drawingbooks of drawbooks) {
                console.log(drawingbooks)
                const booksDiv$$ = document.createElement("div")
                // booksDiv$$.classList('divlibros')
                booksDiv$$.innerHTML=`
                <img src="${drawingbooks.image}" alt="${drawingbooks.title}">
                <h2>${drawingbooks.title}</h2>
                `;
                section$$.appendChild(booksDiv$$);
            }
        }
    }

    const mapBooks = (books) => {
        return books.map((results) => ({
            title: results.title,
            image: results.image
        }))
    
    }

const useInput = (books) => {
    input$$.addEventListener("input", () =>searchBooks(input$$.value, filteredBooks));
}
const searchBooks = (filtro, books) =>{
    let filteredBooks = books.filter((book)=>book.title.toLowercase().includes(filtro.toLowercase()));
    printBooks(filteredBooks);
}

const init = async ()=>{
    const books = await getAllBooks();
    const mapingBooks = mapBooks(books); 
    // console.log(mapingBooks);
    printBooks(books);
    // console.log(books)

}
init();



// let main$$ = document.querySelector("main")
// let section$$ = document.createElement("section")
// let input$$ = document.querySelector(".searchingbar"); // Utiliza querySelector para seleccionar el input

// main$$.appendChild(section$$);

// const getAllBooks = async () => {
//     const arraybook = [];
//     const response = await fetch("http://localhost:5051/book", { method: "GET" });
//     const result = await response.json();
//     arraybook.push(...result); // Utiliza push(...result) para agregar los elementos del array result
//     return arraybook;
// }

// const printBooks = (books) => {
//     section$$.innerHTML = ""; // Limpia la sección antes de mostrar los resultados
//     for (const book of books) {
//         const booksDiv$$ = document.createElement("div");
//         booksDiv$$.innerHTML = `
//             <img src="${book.image}" alt="${book.title}">
//             <h2>${book.title}</h2>
//         `;
//         section$$.appendChild(booksDiv$$);
//     }
// }

// const searchBooks = (filtro, books) => {
//     let filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filtro.toLowerCase()));
//     printBooks(filteredBooks);
// }

// // Agrega un event listener al input para detectar cambios en el texto.
// input$$.addEventListener("input", () => searchBooks(input$$.value, arraybook));

// const init = async () => {
//     const books = await getAllBooks();
//     printBooks(books);
// }

// init();
