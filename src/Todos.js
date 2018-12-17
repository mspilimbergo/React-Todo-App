import React from 'react'



const Todos = ({todos,deleteFunction}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                // React expects an id for every element that is processed in the map method
                <div className="list-group" key={todo.id}>
                    <span className="list-group-item">{todo.content} <button className="float-right btn btn-outline-primary" onClick={() => {deleteFunction(todo.id)}}>Delete</button></span>
                </div>
            )
        })
        ) : (
        <p className=" list-group-item align-content-center">You have no todo's left</p>
    );

    return (
        <div >
            {todoList}
        </div>
    )
}

export default Todos;

