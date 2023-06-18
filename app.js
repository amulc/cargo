const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})
app.get("/about", (req, res) => {
    res.render("pages/about-us")
})
app.get("/team", (req, res) => {
    res.render("pages/team")
})
app.listen(port, () => {
    console.log(`Website is running at port ${port}`);
})