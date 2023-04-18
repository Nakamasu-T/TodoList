import React,{ useState, useContext } from "react";
import { Button, Form, Input, InputGroup, } from 'reactstrap';
import { TodoContext } from "../contexts/TodoContext";
function TodoForm(){
    const {addTodos} = useContext(TodoContext)
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault()
        console.log(value)
        addTodos(value)
        setValue("")
      }    
    return(
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text" value={value} onChange = { e => setValue(e.target.value) }/>
              <Button color='primary'>
                追加
              </Button>
          </InputGroup>
        </Form>
        )
}
export default TodoForm 