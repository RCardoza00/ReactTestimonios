
import './App.css';
import Testimonio from './componentes/Testimonio.jsx'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Alejandra Castillo'
          pais='Mexico'
          imagen='Hoshii'
          cargo='Ingeniera de Software'
          empresa='Google'
          alt='Hoshi'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />

        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          cargo='Ingeniera de software'
          empresa='Spotify'
          alt='Foto de Emma'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
         
          <Testimonio 
          nombre='Swhan Wang'
          pais='Singapur'
          imagen='Shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          alt='Foto de Shawn'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.' />
         
      </div>
    </div>
  );
}

export default App;
