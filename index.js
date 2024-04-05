import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 1700;

/* Write your code here:*/
app.use(express.urlencoded({extended:true}));

app.get("/post", (req, res) => {
  res.sendFile(__dirname + "/public/post.html");
});
app.post("/submit",(req,res) => {
  console.log(req.body);

})


/*main home will be below */
app.use(express.static("public"));
app.get("/",(req,res) => {
  res.render("index.ejs");
});

/*Step 2: Make sure that static files are linked to and the CSS shows up*/

app.get("/about",(req,res) => {
  res.render("about.ejs");
});






/*Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */
app.get("/contact" , (req,res) => {
  res.render("contact.ejs");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
