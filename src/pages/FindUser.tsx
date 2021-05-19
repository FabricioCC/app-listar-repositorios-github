import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../styles/FindUser.css'
import 'antd/dist/antd.css';
import {Input} from 'antd'
import {useFetch} from '../hooks/useFetch'

const {Search} = Input




function FindUser() {

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
