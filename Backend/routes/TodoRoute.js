const { Router } = require("express");  //destructuring the router from express package
const {getToDo,saveToDo,updateToDo,deleteToDo} = require("../controllers/TodoController")
const router = Router();

router.get('/', getToDo);                     //get rqst  (READ)
router.post('/save', saveToDo);               //post rqst  (WRITE)
router.post('/update', updateToDo);           //Update
router.post('/delete', deleteToDo);           //Delete

//we are using PostMan fo sending text

module.exports = router;