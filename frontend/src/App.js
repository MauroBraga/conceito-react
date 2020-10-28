import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import "./App.css"

import api from './services/api'

function App (){


    //1 retorna um array com duas posições
    //2 Funcao para atualizar
    const [projects, setProjects] = useState([])
    
    useEffect(()=> {
        api.get('projects').then(resp => {
            setProjects(resp.data)
        })
    },[])


    async function handleAddProjetc (){
       // setProjects([... projects, `Novo Projeto ${Date.now()}`])
       // console.log(projects)

       const response = await api.post('projects',{
        title: "ReactJs",
        owner: "Mauro Braga"})

        const project = response.data

        setProjects([... projects, project])
    }

    return (
    <>
        <Header title="Projects"/>


        {projects.map(project => <li key={project.id}>{project.title}</li>)}

        <button type="button" onClick={handleAddProjetc}>Adicionar projeto</button>

    </>
    
    
    )
}

export default App