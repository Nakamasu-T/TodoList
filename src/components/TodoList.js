import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Button, Table } from 'reactstrap';

function TodoList(){
    const {todos, completeTodo, removeTodo } = useContext(TodoContext)
     
    return(        
    <Table>
        <tbody>
          {todos && todos.map((todo, index) =>(
            <tr key={index}>
              <th className= 'text-start' style={{textDecorationLine: todo.complete ? 'line-through' : 'none'}}>
                {todo.text}
              </th>
              <td className='text-end'>
                <Button
                  color={todo.complete ? "secondary" : "success" }
                  className='me-2' 
                  onClick={() => completeTodo(index)}>
                    {todo.complete ? '完了' : '未完了' }
                  </Button>
                <Button color='danger' onClick={() => removeTodo(index)}>削除</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
        )
}

export default TodoList