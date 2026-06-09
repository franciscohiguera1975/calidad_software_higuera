describe('con afterEach', () => {
  let registros = [];  // simula un log global

  afterEach(() => {
    // Se ejecuta después de cada test
    // Limpia el array para no contaminar el siguiente test
    registros = ['entrada original'];
    // console.log('Test terminado — estado limpiado');
  });

  test('añade entradas al registro', () => {
    registros.push('entrada 1');
    registros.push('entrada 2');
    expect(registros).toHaveLength(2);
  });

  test('el registro está vacío al inicio de este test', () => {
    // afterEach del test anterior limpió registros
    expect(registros).toHaveLength(1);
  });

  test('añade entradas al registro', () => {
    registros.push('entrada 1');
    registros.push('entrada 2');
    registros.push('entrada 3');
    registros.push('entrada 4');
    expect(registros).toHaveLength(5);
  });

  test('el registro está vacío al inicio de este test', () => {
    // afterEach del test anterior limpió registros
    expect(registros).toHaveLength(1);
  });
});