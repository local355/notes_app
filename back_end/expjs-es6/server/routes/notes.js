import { getNotes, getNote, createNote, deleteNote, updateNote } from '../model/database.js'
import express from 'express';
let notesRoute = express.Router();
let app = express();

notesRoute.get("/",  async (req, res) => {
  const notes = await getNotes()
  res.send(notes)
  //console.log(notes)
  console.log("get recv");
})

notesRoute.get("/:id",  async (req, res) => {
  const id = req.params.id
  const note = await getNote(id)
  res.send(note)

  console.log("get recv: ", id);
})

notesRoute.post("/", async (req, res) => {
  const { title, contents } = req.body
  const note = await createNote(title, contents)
  res.status(201).send(note)
  //console.log(req.body)
  console.log("post recv:");
})

//  notesRoute.options('/:id', cors(), function(req, res){
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Content-Type','application/json');
//   res.header('Access-Control-Allow-Methods', 'DELETEttt');
//   res.json({"jjj" :"jjj"})
//   res.end();
//    console.log("delete recv: app.use");
// });



// notesRoute.delete('/:id',cors(), async (req, res) =>{
//   const id = req.params.id
//   const result = await getNote(id)
//   const deleted = await deleteNote(id)
//   console.log("req  del recv");
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'DELETE');
//   res.send(result)
// })


notesRoute.delete("/:id", async (req, res) =>{
 console.log("del recv lin1 ")
  const id = req.params.id
  const result = await getNote(id)
  const deleted = await deleteNote(id)
  res.send(result)

})


notesRoute.put("/", async (req, res) =>{
  const title = req.body.title
  const contents = req.body.contents
  const id = req.body.id
  await updateNote(title,contents,id).then( (res) =>{
    console.log("notesRoute start")
    console.log(res)
    console.log(title,id,contents)
    console.log("notesRoute end")
}
    ).catch((err) => {
    console.log("notesRoute err start")
      console.log(err)
    console.log("notesRoute err end")
    })

     res.send("res")
  

})

export default  notesRoute;