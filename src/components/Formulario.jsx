import React, { useState } from 'react';
import AlertError from './AlertError';

const Formulario = () => {
  const [estudiante, setEstudiante] = useState({
    documento: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
  });

  const [error, setError] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const enviarFormulario = () => {
    // Validar si existen errores
    if (
      estudiante.documento === '' ||
      estudiante.nombre === '' ||
      estudiante.apellido === '' ||
      estudiante.telefono === '' ||
      estudiante.correo === ''
    ) {
      setMensajeError('Por favor, complete todos los campos.');
      setError(true);
      return;
    }

    // Restablecer el formulario y eliminar los errores
    setEstudiante({
      documento: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
    });
    setError(false);
    setMensajeError('');

    // Objeto con los valores capturados en el formulario
    const datosEstudiante = {
      documento: estudiante.documento,
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      telefono: estudiante.telefono,
      correo: estudiante.correo,
    };

    // Aquí puedes realizar acciones con los datos del estudiante, como enviarlos a un servidor, mostrarlos en la consola, etc.
    console.log(datosEstudiante);
  };

  const handleChange = (e) => {
    setEstudiante({
      ...estudiante,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarFormulario();
  };

  const handleReset = () => {
    setEstudiante({
      documento: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
    });
    setError(false);
    setMensajeError('');
  };

  const mostrarError = () => {
    return (
      <div className="col-md-7 mt-2">
        <AlertError mensaje={mensajeError} />
      </div>
    );
  };

  return (
    <div>
      {error && mostrarError()}
      <div className="col-md-7 mt-2">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Formulario</h3>
          </div>
          <div className="card-body">
            <form action="#" className="mb-3" onSubmit={handleSubmit} onReset={handleReset}>
              {/* Campo de entrada para el documento */}
              <div className="row mb-3">
                <label htmlFor="documento" className="col-sm-4 col-form-label" style={{ backgroundColor: '#F2F2F2', padding: '5px', borderRadius: '5px' }}>Documento:</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="documento" name="documento" placeholder="Ingrese el documento" value={estudiante.documento} onChange={handleChange} />
                </div>
              </div>

              {/* Campo de entrada para el nombre */}
              <div className="row mb-3">
                <label htmlFor="nombre" className="col-sm-4 col-form-label" style={{ backgroundColor: '#F2F2F2', padding: '5px', borderRadius: '5px' }}>Nombre:</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre" value={estudiante.nombre} onChange={handleChange} />
                </div>
              </div>

              {/* Campo de entrada para el apellido */}
              <div className="row mb-3">
                <label htmlFor="apellido" className="col-sm-4 col-form-label" style={{ backgroundColor: '#F2F2F2', padding: '5px', borderRadius: '5px' }}>Apellido:</label>
                <div className="col-sm-8">
                  <input type="text" className="form-control" id="apellido" name="apellido" placeholder="Ingrese el apellido" value={estudiante.apellido} onChange={handleChange} />
                </div>
              </div>

              {/* Campo de entrada para el teléfono */}
              <div className="row mb-3">
                <label htmlFor="telefono" className="col-sm-4 col-form-label" style={{ backgroundColor: '#F2F2F2', padding: '5px', borderRadius: '5px' }}>Teléfono:</label>
                <div className="col-sm-8">
                  <input type="tel" className="form-control" id="telefono" name="telefono" placeholder="Ingrese el teléfono" value={estudiante.telefono} onChange={handleChange} />
                </div>
              </div>

              {/* Campo de entrada para el correo */}
              <div className="row mb-3">
                <label htmlFor="correo" className="col-sm-4 col-form-label" style={{ backgroundColor: '#F2F2F2', padding: '5px', borderRadius: '5px' }}>Correo:</label>
                <div className="col-sm-8">
                  <input type="email" className="form-control" id="correo" name="correo" placeholder="Ingrese el correo" value={estudiante.correo} onChange={handleChange} />
                </div>
              </div>

              {/* Botones de enviar y restablecer */}
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#336633', borderColor: '#336633' }}>Enviar</button>
                <button type="reset" className="btn btn-primary" style={{ backgroundColor: '#3377CC', borderColor: '#3377CC' }}>Restablecer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
