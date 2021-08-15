import React, { useEffect, useState } from 'react'
import { useParams, Route, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPosts'
import SubCategoria from './SubCategoria'

const Categoria = () => {

    const {id} = useParams()
    const {url, path } = useRouteMatch()
    const [subcategorias, setSubcategorias] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (Categoria)=> {
            setSubcategorias(Categoria.subcategorias)
        })
    }, [])
    return(
        <fragment>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
        <ListaCategorias />
        <ul className="lista-categorias container flex">
            {

                subcategorias.map((subcategoria) => (

                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                        <Link to={`${url}/${subcategoria}`}>

                            {subcategoria}
                        </Link>
                    </li>


                ))
               
            }
        
        </ul>

        <Switch>
        <Route extact path={`${ path }/`}>

            <ListaPost url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
            <SubCategoria />
        </Route>


        </Switch>
       
        
        </fragment>
    )
}

export default Categoria