const Joi = require('joi'); //Joi 13.1.0
const express = require('express');
const { workerData } = require('worker_threads');
const app = express();

const books = [
    {Subject: 'technologies', Author: "Robert C. Martin", Title: 'Clean Code: A Handbook of Agile Software Craftsmanship'},
    {Subject: 'technologies', Author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein", Title: 'Introduction to Algorithms'},
    {Subject: 'technologies', Author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman", Title: 'Structure and Interpretation of Computer Programs (SICP)'},
    {Subject: 'technologies', Author: "Robert C. Martin", Title: 'The Clean Coder: A Code of Conduct for Professional Programmers'},
    {Subject: 'technologies', Author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides, Grady Booch", Title: 'Design Patterns: Elements of Reusable Object-Oriented Software'},
    {Subject: 'Physics', Author: "Karl F. Kuhn, Frank Noschese", Title: 'Basic Physics: A Self-Teaching Guide'},
    {Subject: 'Biology', Author: "Johnjoe McFadden", Title: 'Quantum Evolution: Life in the Multiverse'},
    {Subject: 'Chemistry', Author: "César Vega, Job Ubbink, Erik van der Linden, Jeffrey Steingarten", Title: 'The Kitchen as Laboratory: Reflections on the Science of Food and Cooking'},
    {Subject: 'Physics', Author: "Manjit Kumar", Title: 'Quantum Einstein debate'},
    {Subject: 'Biology', Author: "Jim Al-Khalili", Title: 'Life on the Edge: The Coming of Age of Quantum Biology'},
    {Subject: 'Physics', Author: "Alistair I. M. Rae", Title: 'Quantum physics: A beginner’s guide'},
    {Subject: 'Biography', Author: "Cristina Ferreira", Title: 'The beloved Supreme God Belchior'},
    {Subject: 'Chemistry', Author: "Adam Sharples, James Morton, Henning Wackerhage", Title: 'Molecular Exercise Physiology'},
    {Subject: 'Physics', Author: "Dr. Michio Kaku", Title: 'The God Equation: The Quest for a Theory of Everything'},
    {Subject: 'Biography', Author: "Andrew Hodges", Title: 'Alan Turing: The Enigma'},
    {Subject: 'Economics', Author: "Thomas Sowell", Title: 'Basic Economics'}
]

const aux = books.map(book => {return book.Subject});
const subs = aux.filter((item,pos) => {return aux.indexOf(item) == pos});
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is Belchior\'s University Library\n Which books are you looking for?\n');
})

app.get('/api/subjects', (req, res) => {
    res.send(subs);
})


app.get('/api/subjects/:sub', (req, res) => {
    const list = (books.filter(book => book.Subject.toLowerCase().trim().includes(req.params.sub.toLowerCase().trim())));
    if (list == []) return res.status(404).send('Subject not found');
    res.send(list);

})

app.post('/api', (req, res) =>    {
    const {subject, title, author} = req.body;
    const found = books.find(book => book.Title.toLowerCase() == title.toLowerCase())
    
    if (found) return res.status(400).send('Book already exists');
    
    books.push({Subject: subject, Title: title, Author: author});

    const inSubsList = () => subs.find(sub => sub.Subject.toLowerCase().trim().includes(subject.toLowerCase().trim()));

    if (!inSubsList) subs.push(subject);

    res.status(201);
})

// app.put()

// app.delete()

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}...`);
})