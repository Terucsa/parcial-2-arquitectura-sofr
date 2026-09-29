import { useState } from 'react'
import './App.css'

type Alumno = {
  id: number
  nombre: string
  apellido: string
  edad: number
  email: string
  carrera: string
}

const alumnosIniciales: Alumno[] = [
  { id: 1, nombre: 'Ana',    apellido: 'García',   edad: 20, email: 'ana.garcia@mail.com',      carrera: 'Ingeniería' },
  { id: 2, nombre: 'Luis',   apellido: 'Pérez',    edad: 22, email: 'luis.perez@mail.com',      carrera: 'Medicina' },
  { id: 3, nombre: 'María',  apellido: 'López',    edad: 21, email: 'maria.lopez@mail.com',     carrera: 'Derecho' },
  { id: 4, nombre: 'Carlos', apellido: 'Ramírez',  edad: 23, email: 'carlos.ramirez@mail.com',  carrera: 'Arquitectura' },
  { id: 5, nombre: 'Sofía',  apellido: 'Torres',   edad: 19, email: 'sofia.torres@mail.com',    carrera: 'Psicología' },
]

const formVacio = {
  nombre: '',
  apellido: '',
  edad: '',
  email: '',
  carrera: '',
}

function App() {
  const [alumnos, setAlumnos] = useState<Alumno[]>(alumnosIniciales)
  const [form, setForm] = useState(formVacio)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.nombre || !form.apellido || !form.edad || !form.email || !form.carrera) {
      alert('Por favor completa todos los campos')
      return
    }

    const nuevoAlumno: Alumno = {
      id: alumnos.length ? Math.max(...alumnos.map((a) => a.id)) + 1 : 1,
      nombre: form.nombre,
      apellido: form.apellido,
      edad: Number(form.edad),
      email: form.email,
      carrera: form.carrera,
    }

    setAlumnos((prev) => [...prev, nuevoAlumno])
    setForm(formVacio)
  }

  return (
      <div className="app">
        <h1>Listado de Alumnos</h1>

        <section className="formulario-alumno">
          <h2>Agregar Alumno</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={form.nombre}
                  onChange={handleChange}
              />
              <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={form.apellido}
                  onChange={handleChange}
              />
              <input
                  type="number"
                  name="edad"
                  placeholder="Edad"
                  value={form.edad}
                  onChange={handleChange}
              />
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
              />
              <input
                  type="text"
                  name="carrera"
                  placeholder="Carrera"
                  value={form.carrera}
                  onChange={handleChange}
              />
            </div>
            <button type="submit">Agregar</button>
          </form>
        </section>

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