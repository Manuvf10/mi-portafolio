import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

const projects = [
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        link: 'http://link-proyecto-1.com'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2.',
        link: 'http://link-proyecto-2.com'
    }
];

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="about">
                    <h2>Sobre mí</h2>
                    <p>Aquí va la información sobre ti.</p>
                </section>
                <section id="projects">
                    <h2>Proyectos</h2>
                    {projects.map((project, index) => (
                        <Project 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            link={project.link} 
                        />
                    ))}
                </section>
                <section id="contact">
                    <h2>Contacto</h2>
                    <p>Correo: <a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
