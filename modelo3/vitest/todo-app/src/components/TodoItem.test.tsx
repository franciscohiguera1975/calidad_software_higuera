// src/components/TodoItem.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import type { Todo } from '../types';

describe('TodoItem', () => {
    it('debería mostrar el texto de la tarea', () => {
        // Arrange: preparamos una tarea de ejemplo y funciones vacías.
        const todo = crearTodo({ text: 'Estudiar Vitest' });
        // Act: renderizamos el componente (aquí el "acto" es el propio render).
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);

        // Assert: el texto de la tarea debe estar en el documento.
        expect(screen.getByText('Estudiar Vitest')).toBeInTheDocument();
        expect(screen.getByText('Tarea Comprar pan')).toBeInTheDocument();
    });

    it('debería renderizar un checkbox', () => {
        // Arrange
        const todo = crearTodo();
        // Act
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
        // Assert: el rol "checkbox" identifica el <input type="checkbox">
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeDefined();
    });

    it('debería mostrar un botón de eliminar', () => {
        const todo = crearTodo();
        console.log(todo);
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
        expect(
            screen.getByRole('button', { name: 'Eliminar' }),
        ).toBeDefined();
    });

    it('debería mostrar un checkbox en true', () => {
        const todo = crearTodo({ completed: true });
        console.log(todo);
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
        expect(
            screen.getByRole('checkbox', { checked: true }),
        ).toBeInTheDocument();
    });

    describe('TodoItem · matchers', () => {
        it('debería marcar el checkbox cuando la tarea está completada', () => {
            // Arrange: tarea completada
            const todo = crearTodo({ completed: true });
            // Act
            render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
            // Assert: el checkbox debe estar marcado
            expect(screen.getByRole('checkbox')).toBeChecked();
        });
    });

    it('NO debería marcar el checkbox cuando la tarea está activa', () => {
        // Arrange: tarea pendiente
        const todo = crearTodo({ completed: false });
        // Act
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
        // Assert: matcher negado con .not
        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('debería mostrar el texto exacto de la tarea', () => {
        const todo = crearTodo({ text: 'Estudiar matchers', titulo: 'Educación Programación' });
        render(<TodoItem todo={todo} onToggle={() => { }} onDelete={() => { }} />);
        // toHaveTextContent comprueba el texto contenido en el <li>
        expect(screen.getByRole('listitem')).toHaveTextContent('Estudiar matchers');
        expect(screen.getByRole('listitem')).toHaveTextContent('Educación Programación');
    });
});

// Helper local: crea una tarea con valores por defecto sobreescribibles.
function crearTodo(overrides: Partial<Todo> = {}): Todo {
    return {
        id: '1',
        text: 'Comprar pan en la panadería',
        completed: false,
        titulo: 'Tarea Comprar pan',
        ...overrides
    };
}