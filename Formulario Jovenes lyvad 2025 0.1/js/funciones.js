document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.querySelector('[name="nombre"]').value,
        cedula: document.querySelector('[name="cedula"]').value,
        sexo: document.querySelector('[name="sexo"]').value,
        edad: document.querySelector('[name="edad"]').value,
        estadoCivil: document.querySelector('[name="estadoCivil"]').value,
        telefono: document.querySelector('[name="telefono"]').value,
        barrio: document.querySelector('[name="barrio"]').value,
        direccion: document.querySelector('[name="direccion"]').value,
        activo: document.querySelector('[name="activo"]').value
    };

    const encabezados = Object.keys(datos).join(',');
    const valores = Object.values(datos).join(',');
    const contenidoCSV = `${encabezados}\n${valores}`;

    const blob = new Blob([contenidoCSV], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'registro_joven.csv';
    enlace.click();

    URL.revokeObjectURL(url);
});
