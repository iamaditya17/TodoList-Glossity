import axios from 'axios'

const baseUrl = "http://localhost:5000"   //url of localhost of server(From where we are fetching data)

const getAllToDo = (setToDo) => {
    axios.get(baseUrl)
        .then(({ data }) => {
            console.log('Data:', data);
            setToDo(data)
    })
}

const addList = (text, setText, setToDo) => {
    
    axios.post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
    })
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating ) => {
    
    axios.post(`${baseUrl}/update`, {_id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const deleteTask = (_id , setToDo) => {
    
    axios.post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

export {getAllToDo , addList , updateToDo , deleteTask}