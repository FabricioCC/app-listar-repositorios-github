import React from 'react'
import {Card, Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import '../styles/UserRepos.css'

interface user{
    username: string,
}

interface repos {
    name: string,
    language: string,
    stargazers_count: string,
    license: {
        name: string
    },
    updated_at: Date,
    html_url: string

}

function UserRepos(props: user) {

    const {data} = useFetch<repos[]>(`users/${props.username}/repos`)
    
   
    

    return (
        <div className="UserRepos_container">
            
            <Row>
                {data?.map(repo => (
            
                    
                    <a href={repo.html_url} >
                        <Card className="card" title={repo.name} style={{width: 250, margin: 10}}>
                        
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
