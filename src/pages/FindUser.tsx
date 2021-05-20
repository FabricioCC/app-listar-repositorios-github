import React from 'react'
import '../styles/FindUser.css'
import 'antd/dist/antd.css';
import {Input} from 'antd'

const {Search} = Input




function FindUser() {

    //acessa a rota responsavel por mostrar os resultados da busca
    const OnSearch = (value: string) => {
      window.location.href = `/users/${value}`
    }
    
    return (
        <div className="findUser-container">
          <form>

              <Search placeholder="Nome do usuario"
                enterButton="Pesquisar"
                size="large"
                type="text"
                onSearch={OnSearch}
                />
          </form>
        </div>
    )
}

export default FindUser
