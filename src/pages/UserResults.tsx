import React from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import '../styles/UserResults.css'
import UserDetails from '../components/UserDetails'
import UserRepos from '../components/UserRepos'
import {Link} from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons'

function UserResults() {

    interface userName {
        name: string;
    }

    interface Data {
        name: string,
        avatar_url: string,
        bio: string, 
        public_repos: string, 
        followers: string, 
        following: string, 

    }

    
    //acessa os parametros para ver o username 
    const params = useParams<userName>();
    const username = params.name;
    
    //armazena o retorno do hook, tanto a data como o erro caso haja
    const {data, error} = useFetch<Data>(`users/${username}`)

    //se houver um erro, retorna uma div que informara ao usuario e mostrará um botao para voltar
    //a pagina de pesquisa
    if (error) return(
        <div className="error-container">
            <h1>Usuário não encontrado :(</h1>
            <Link to="/"><button>Pesquisar outro usuario</button></Link>
        </div>
    )

    //aguarda os dados carregarem
    if(!data){
        return <h1>Aguardando dados do usuário...</h1> 
    }

    return (
        <div className="container">
            <div className="body">
                {/* passa os dados como parâmetro para os componentes */}
                <UserDetails name={data?.name} bio={data?.bio} avatar_url={data?.avatar_url} public_repos={data?.public_repos} followers={data?.followers} following={data?.following}/>
                <UserRepos username={username}/>
                <Link to="/" className="link-home"><ArrowLeftOutlined style={{width: 20, height: 20}}/></Link>
            </div>
            
                
            
        </div>
        
    )
}

export default UserResults
