#!/usr/bin/env tsc
// I'm glad it still compiles with a shebang

type Todo = {
  // To prevent a function from modifying it's input, you can use the readonly
  // keyword in TypeScript.
  readonly id: number
  readonly text: string
  readonly done: boolean
}

// The input to toggleTodo must be Todo as shown by the `: Todo` after the todo.
// The return type of toggleTodo() must also be Todo.
// We do this by adding : Todo after the parameter list.
function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

const foo: Todo = {
  id: 1,
  text: '...',
  done: true
}

const result = toggleTodo({
  id: 1,
  text: '...',
  done: true
})

console.log('Expected:')
console.log(`{ id: 1, text: '...', done: false }`)
console.log('Actual:')
console.log(result)

