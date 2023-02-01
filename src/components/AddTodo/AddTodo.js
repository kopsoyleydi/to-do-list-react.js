import React, {useState} from "react";
import { Col, Row, Button, FormControl } from "react-bootstrap";
import {v4 as uuid} from 'uuid'
import './AddTodo.css';

function AddTodo({todo, setTodo}){

    const [value,setValue] = useState('');

    function saveTodo(){
        if( value !== ""){
            setTodo(
                [...todo, {
                    id: uuid(),
                    title: value,
                    status: true
                }]
        )
        }
        else{
        setValue('')
        }
    }
    return(
        <Row >
            <Col className='addTodoForm'>
            <div>
                <FormControl placeholder="Ввидите задачу" value={value} onChange={(e) => setValue(e.target.value)}/>
                <Button className='btn' variant="primary" onClick={saveTodo}>Сохранить</Button>
            </div>
            </Col>
        </Row>
        
    );
}
export default AddTodo;