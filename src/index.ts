#!/usr/bin/env tsc
// I'm glad it still compiles with a shebang

// Readonly Types:
type Todo = Readonly<{
  /*
   * To prevent a function from modifying it's input, you can use the readonly
   * keyword in TypeScript. However, rather than modifying every property, let's
   * modify the entire type.
   * This is referred to as a mapped type. Mapped types are functions that
   * take a TypeScript type that outputs a type.
   * There are many built-in mapped types (like Required<...>, Partial<...>
   * You can also create your own Mapped Types.
  */
  id: number
  text: string
  done: boolean
}>

function toggleTodo(todo: Todo): Todo {
  // The input to toggleTodo must be Todo as shown by the `: Todo` after the todo.
  // The return type of toggleTodo() must also be Todo.
  // We do this by adding : Todo after the parameter list.
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

