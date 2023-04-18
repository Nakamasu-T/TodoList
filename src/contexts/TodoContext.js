import React, {createContext, useState} from "react"

export const TodoContext = createContext()
const TodoContextProvider = (props) =>{
    const [todos, setTodos] = useState([]);

    const addTodos = text => {
      const newTodos = [...todos, {text, complete: false} ]
      setTodos(newTodos)
      console.log(newTodos)
    } 
    const completeTodo = index =>{
      const newTodos = [...todos ]
      newTodos[index].complete = !newTodos[index].complete
      setTodos(newTodos)
      console.log(newTodos)
  }
  const removeTodo = index => {
      const newTodos = [...todos ]
      newTodos.splice(index, 1)
      setTodos(newTodos)
  }
  return(
        <TodoContext.Provider value={{todos, addTodos, removeTodo, completeTodo }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider