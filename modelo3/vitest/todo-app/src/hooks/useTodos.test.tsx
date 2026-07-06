// src/hooks/useTodos.test.tsx
import { act, renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import type { Todo } from '../types'
import { useTodos } from './useTodos'

describe('useTodos', () => {
  it('arranca con lista vacía y filtro "all"', () => {
    const { result } = renderHook(() => useTodos())
    //      ^^^^^^ objeto con .current (snapshot del retorno del hook)

    // result.current contiene exactamente lo que el hook retorna
    expect(result.current.todos).toEqual([])
    expect(result.current.filter).toBe('all')
  })

  it('respeta el estado inicial provisto', () => {
    const inicial: Todo[] = [{ id: 'x', text: 'Pre-cargada', completed: false, titulo: 'Carga' }]
    const { result } = renderHook(() => useTodos(inicial))

    expect(result.current.todos).toHaveLength(1)
    expect(result.current.todos[0].text).toBe('Pre-cargada')
  })

  it('toggle alterna el campo completed', () => {
    const inicial: Todo[] = [
      { id: 'a', text: 'Tarea', completed: false, titulo: 'tarea 1' }]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(true)

    // segundo toggle vuelve al estado original
    act(() => result.current.toggle('a'))
    expect(result.current.todos[0].completed).toBe(false)
  })

  it('remove elimina la tarea por id', () => {
    const inicial: Todo[] = [
      { id: 'a', text: 'Una', completed: false, titulo: 'tarea 1' },
      { id: 'b', text: 'Dos', completed: false, titulo: 'tarea 2'  },
      { id: 'c', text: 'Dos', completed: false, titulo: 'tarea 3'  },
    ]
    const { result } = renderHook(() => useTodos(inicial))

    act(() => result.current.remove('a'))

    expect(result.current.todos).toHaveLength(2)
    expect(result.current.todos[0].id).toBe('b')
    expect(result.current.todos[1].id).toBe('c')
  })

})

describe('useTodos — filtro', () => {
  function setup() {
    const inicial: Todo[] = [
      { id: '1', text: 'Activa', completed: false, titulo: 'status1' },
      { id: '2', text: 'Hecha', completed: true, titulo: 'status2' },
    ]
    return renderHook(() => useTodos(inicial))
  }

  it('filtro "all" muestra todas', () => {
    const { result } = setup()
    expect(result.current.visibleTodos).toHaveLength(2)
  })

  it('filtro "active" muestra solo las no completadas', () => {
    const { result } = setup()

    act(() => result.current.setFilter('active'))

    expect(result.current.visibleTodos).toHaveLength(1)
    expect(result.current.visibleTodos[0].text).toBe('Activa')
  })

  it('filtro "completed" muestra solo las completadas', () => {
    const { result } = setup()

    act(() => result.current.setFilter('completed'))
    expect(result.current.visibleTodos).toHaveLength(1)
    expect(result.current.visibleTodos[0].text).toBe('Hecha')
  })
})