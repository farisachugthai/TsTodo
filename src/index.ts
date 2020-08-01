#!/usr/bin/env tsc
// I'm glad it still compiles with a shebang

type Todo = {
  id: number
  text: string
  done: boolean
}

function toggleTodo(todo) {
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

