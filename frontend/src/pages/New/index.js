import React, { useState, useMemo} from 'react'
import Api from '../../services/api'

import camera from '../../assets/camera.svg'
import './style.css'

export default function New( {history} ) {
    const [thumbnail, setThumbnail] = useState(null)
    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [price, setPrice] = useState('')
    
    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail): null
    }, [thumbnail])

    async function heandleSubmit(event) {
        event.preventDefault()
        
        const user_id = localStorage.getItem('user')
        const data = new FormData()
        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)
        data.append('price', price)

        await Api.post('/spots', data, {
            headers: { user_id}
        })

        history.push('/dashboard')
    }

    return (
        <form onSubmit={heandleSubmit}>
            <label 
                id="thumbnail" 
                style={{backgroundImage: `url(${preview})`}}
                className={thumbnail ? 'has-thumbnail' : ''}
                >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])}></input>
                <img src={camera} alt="Select img!"/>
            </label>
            <label htmlFor="company">COMPANY</label>
            <input
                id="company"
                placeholder="Company"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">Techonologies <span>(Comma Separated)</span></label>
            <input
                id="techs"
                placeholder="Techs"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="price">Price <span>(Empty for free)</span></label>
            <input
                id="price"
                placeholder="Price per day"
                value={price}
                onChange={event => setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>
        </form>
        )
}