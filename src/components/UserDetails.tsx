import React from 'react'
import {Avatar} from 'antd'
import "../styles/UserDetails.css"

interface user {
    name: string,
    avatar_url: string,
    bio: string, 
    public_repos: string, 
    followers: string, 
    following: string, 

}

function UserDetails(data: user) {

    let name = data?.name
    if(name==null) name = "Usuario sem nome"

    let bio = data?.bio;
    if(!bio) bio = "Usuário sem bio"


    return (
        <div className="UserDetails_container">
            <div className="user_avatar">
                <Avatar size={256} src={data?.avatar_url} />
                <h2>{name} </h2>
            </div>
            
            <div className="user_bio">
                <h3>{bio} </h3>
            </div>
            
            
            <div className="user_statistics">
                <p>Repositórios: <span>{data?.public_repos}</span></p>
                <p>Seguidores: <span>{data?.followers}</span></p>
                <p>Seguindo: <span>{data?.following}</span></p>
            </div>
        </div>

    )
}

export default UserDetails
