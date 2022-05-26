const books = [
        {Subject: 'technologies', Author: "Robert C. Martin", Title: 'Clean Code: A Handbook of Agile Software Craftsmanship', id: 1},
        {Subject: 'technologies', Author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", Title: 'Introduction to Algorithms', id: 2},
        {Subject: 'technologies', Author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman", Title: 'Structure and Interpretation of Computer Programs (SICP)', id: 3},
        {Subject: 'technologies', Author: "Robert C. Martin", Title: 'The Clean Coder: A Code of Conduct for Professional Programmers', id: 4},
        {Subject: 'technologies', Author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, Grady Booch", Title: 'Design Patterns: Elements of Reusable Object-Oriented Software', id: 16},
        {Subject: 'Physics', Author: "Karl F. Kuhn, Frank Noschese", Title: 'Basic Physics: A Self-Teaching Guide', id: 5},
        {Subject: 'Biology', Author: "Johnjoe McFadden", Title: 'Quantum Evolution: Life in the Multiverse', id: 6},
        {Subject: 'Chemistry', Author: "César Vega, Job Ubbink, Erik van der Linden, Jeffrey Steingarten", Title: 'The Kitchen as Laboratory: Reflections on the Science of Food and Cooking', id: 7},
        {Subject: 'Physics', Author: "Manjit Kumar", Title: 'Quantum Einstein debate', id: 8},
        {Subject: 'Biology', Author: "Jim Al-Khalili", Title: 'Life on the Edge: The Coming of Age of Quantum Biology', id: 9},
        {Subject: 'Physics', Author: "Alistair I. M. Rae", Title: 'Quantum physics: A beginner’s guide', id: 10},
        {Subject: 'Biography', Author: "Cristina Ferreira", Title: 'The beloved Supreme God Belchior', id: 11},
        {Subject: 'Chemistry', Author: "Adam Sharples, James Morton, Henning Wackerhage", Title: 'Molecular Exercise Physiology', id: 12},
        {Subject: 'Physics', Author: "Dr. Michio Kaku", Title: 'The God Equation: The Quest for a Theory of Everything', id: 13},
        {Subject: 'Biography', Author: "Andrew Hodges", Title: 'Alan Turing: The Enigma', id: 14},
        {Subject: 'Economics', Author: "Thomas Sowell", Title: 'Basic Economics', id: 15}
    ]
    
    const aux = books.map(book => {return book.Subject});
    const subs = aux.filter((item,pos) => {return aux.indexOf(item) == pos});

module.exports = {books, subs};