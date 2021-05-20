import React from 'react'
import {Card, Row} from 'antd'
import {useFetch} from '../hooks/useFetch'
import '../styles/UserRepos.css'

//tipo usuario que sera recebido como props
interface user{
    username: string,
}

//tipo de repositorio a ser carregado
interface repos {
    name: string,
    description: string,
    language: string,
    stargazers_count: string,
    license: {
        name: string
    },
    updated_at: Date,
    html_url: string

}

function UserRepos(props: user) {


    //usa o hook useFetch pra carregar os repositorios da api
    const {data} = useFetch<repos[]>(`users/${props.username}/repos`)
    
   
    

    return (
        <div className="UserRepos_container">
            
            <Row>
                {/* percorre o array data, pegando cada repositorio */}
                {data?.map(repo => (
                    //caca card sera um link para a url do repositorio no github
                    //eu tentei usar o component Link mas devido a alguns erros, optei pelo <a href/> mesmo
                    <a href={repo.html_url} >
                        <Card className="card" title={repo.name} style={{width: 250, margin: 10}}>
                            <p>{`Descricao: ${!repo.description ? "Não possui" : repo.description} `}</p>
                            <p>{`Linguagem principal: ${repo.language}`}</p>
                            <p>{`Estrelas: ${repo.stargazers_count}`}</p>
                            <p>{ `Licensa: ${!repo.license ? "Não possui" : repo.license.name}`}</p>
                            <p>{`Última atualização: ${repo.updated_at}`}</p>
 
                        </Card>

                    </a>
                    
                    
                ))}
               
               
                
                
            </Row>   
            
        </div>
    )
}

export default UserRepos
