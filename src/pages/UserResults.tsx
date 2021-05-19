import React from 'react'
import {useParams} from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'
import '../styles/UserResults.css'
import UserDetails from '../components/UserDetails'
import UserRepos from '../components/UserRepos'
import {Link} from 'react-router-dom'

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

    

    const params = useParams<userName>();
    const username = params.name;
    
    const {data, error} = useFetch<Data>(`users/${username}`)

    if (error) return(
        <div>
            <h1>Usuário não encontrado</h1>
            <Link to="/"><h2>Pesquisar outro usuario</h2></Link>
        </div>
    )


    if(!data){
        return <h1>Aguardando...</h1> 
    }

    return (
        <div className="container">
            <div className="body">
                <UserDetails name={data?.name} bio={data?.bio} avatar_url={data?.avatar_url} public_repos={data?.public_repos} followers={data?.followers} following={data?.following}/>
                <UserRepos username={username}/>
            </div>
            
                
            
        </div>
        
    )
}

export default UserResults
