import './App.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiMysql } from 'react-icons/si'

function App() {
  return (
    <div className="App">
      <div className="Home">
        <h1>Yuri Paz de Souza</h1>
        <h2>Formação Acadêmica</h2>
      <ul>
        <li>Ensino fundamental - José Leandro de Barros Pimentel(2015-2023)</li>
        <li>Ensino Técnico de Informática - Escola Técnica ITB/FIEB (2024-2026)</li>
      </ul>
      </div>

      <div className="Habilidades">
        <h2>Habilidades Técnicas</h2>
        <ul>
         <li className='html'><FaHtml5 /> HTML</li>
          <li className='css'><FaCss3Alt /> CSS</li>
          <li className='javascript'><FaJs /> JavaScript</li>
          <li className='typescript'><SiTypescript /> TypeScript</li>
          <li className='react'><FaReact /> React</li>
          <li className='node'><FaNodeJs /> Node.js</li>
          <li className='t-sql'><SiMysql /> T-SQL</li>
          <li className='git'><FaGitAlt /> Git</li>
          <li className='docker'><FaDocker /> Docker</li>

        </ul>
      </div>
      <div className="Idiomas">
        <h2>Idiomas</h2>
        <ul>
          <li>
            🇧🇷 Português: Nativo
          </li>
          <li>
            🇺🇸 Inglês: Intermediário
          </li>
          <li>
            🇪🇸 Espanhol: Iniciante(pretendo estudar)
          </li>
        </ul>
      </div>
      <div className="Projetos">
        <h2>Projetos Pessoais</h2>
        <ul>
          <li>
            Site de Currículo Online: Desenvolvi um site pessoal para exibir meu currículo e portfólio de projetos.(Em construção)
          </li>
          <li>
            Site de Tarefas: Criei um aplicativo simples para gerenciar tarefas diárias usando React e TypeScript.
          </li>
        </ul>
      </div>
      <div className="Cursos">
        <h2>Cursos e Certificações</h2>
        <ul>
         <li>
            Curso de Typescript Basico - Code Academy (2025)
          </li>
          <li>
            Curso de Typescript Intermediário - Code Academy (2025)
          </li>
          <li>
            Curso de Typescript avançado - Code Academy (2025)
          </li>
        </ul>
      </div>
   <div className="Contato">
  <h2>Contato</h2>
  <ul>
    <li>
      <FaEnvelope /> Email: <a href="mailto:pazyuri84@gmail.com">pazyuri84@gmail.com</a>
    </li>
    <li>
      <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/yuri-paz-8748252ba/" target="_blank">Perfil LinkedIn</a>
    </li>
    <li>
      <FaGithub /> GitHub: <a href="https://github.com/ExodiaD" target="_blank">ExodiaD</a>
    </li>
    <li>
      <FaWhatsapp /> WhatsApp: <a href="https://wa.me/5511960362875" target="_blank">(11) 96036-2875</a>
    </li>
  </ul>
</div>

    </div>
  )
}


export default App
