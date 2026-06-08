// tests/sesion.test.js
const { obtenerUsuarioPorToken, 
    mensajeBienvenida, 
    ieneSesionActiva } = require('./sesion');

const usuarios = [
  { nombre: 'Ana',  token: 'abc123', activo: true  },
  { nombre: 'Luis', token: 'xyz789', activo: false },
];

// toBeDefined — el valor NO es undefined
test('token válido devuelve un usuario (no undefined)', () => {
  const usuario = obtenerUsuarioPorToken('abc123', usuarios);
  expect(usuario).toBeDefined();
});

// toBeNull — el valor ES exactamente null
test('token inválido devuelve null', () => {
  const usuario = obtenerUsuarioPorToken('tokenFalso', usuarios);
  expect(usuario).toBeNull();
});

// toBeNull — token vacío también devuelve null
test('token vacío devuelve null', () => {
  expect(obtenerUsuarioPorToken('', usuarios)).toBeNull();
});

// not.toBeNull — el valor NO es null
test('token correcto devuelve un usuario que no es null', () => {
  expect(obtenerUsuarioPorToken('abc123', usuarios)).not.toBeNull();
});

// toBeUndefined — el valor ES exactamente undefined
test('mensajeBienvenida sin usuario devuelve undefined', () => {
  expect(mensajeBienvenida(null)).toBeUndefined();
});

// toBeDefined — el valor NO es undefined
test('mensajeBienvenida con usuario devuelve un string definido', () => {
  const usuario = { nombre: 'Ana' };
  expect(mensajeBienvenida(usuario)).toBeDefined();
});

// toBeTruthy — cualquier valor "verdadero" (no vacío, no cero, no null...)
test('usuario con sesión activa → truthy', () => {
  expect(tieneSesionActiva(usuarios[0])).toBeTruthy();
});

// toBeFalsy — false, 0, null, undefined, '' o NaN
test('usuario con sesión inactiva → falsy', () => {
  expect(tieneSesionActiva(usuarios[1])).toBeFalsy();
});

test('sin usuario → falsy', () => {
  expect(tieneSesionActiva(null)).toBeFalsy();
});

// El mismo archivo tests/sesion.test.js puede incluir estos tests

test('not.toBe — el saludo de la mañana no es el de la noche', () => {
  const { obtenerSaludo } = require('./calculadora');
  expect(obtenerSaludo(9)).not.toBe('Buenas noches');
});

test('not.toBeNull — usuario encontrado no es null', () => {
  const usuario = obtenerUsuarioPorToken('abc123', usuarios);
  expect(usuario).not.toBeNull();
});

test('not.toBeTruthy — sesión inactiva no es truthy', () => {
  expect(tieneSesionActiva(usuarios[1])).not.toBeTruthy();
});