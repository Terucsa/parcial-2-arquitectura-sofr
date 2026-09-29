import './App.css'

type Alumno = {
  id: number
  nombre: string
  apellido: string
  edad: number
  email: string
  carrera: string
}

const alumnos: Alumno[] = [
  { id: 1, nombre: 'Ana',    apellido: 'García',   edad: 20, email: 'ana.garcia@mail.com',   carrera: 'Ingeniería' },
  { id: 2, nombre: 'Luis',   apellido: 'Pérez',    edad: 22, email: 'luis.perez@mail.com',   carrera: 'Medicina' },
  { id: 3, nombre: 'María',  apellido: 'López',    edad: 21, email: 'maria.lopez@mail.com',  carrera: 'Derecho' },
  { id: 4, nombre: 'Carlos', apellido: 'Ramírez',  edad: 23, email: 'carlos.ramirez@mail.com', carrera: 'Arquitectura' },
  { id: 5, nombre: 'Sofía',  apellido: 'Torres',   edad: 19, email: 'sofia.torres@mail.com', carrera: 'Psicología' },
]

function App() {
  return (
      <div className="app">
        <h1>Listado de Alumnos</h1>
        <table className="tabla-alumnos">
          <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Carrera</th>
          </tr>
          </thead>
          <tbody>
          {alumnos.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.email}</td>
                <td>{alumno.carrera}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  )
}

export default App