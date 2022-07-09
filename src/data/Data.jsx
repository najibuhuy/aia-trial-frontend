import {useState, useEffect} from 'react';
import Gallery from '../gallery/Gallery';
import {staticToken, urlApi} from '../api'
import CircularProgress from '@mui/material/CircularProgress';

const axios = require('axios');

export default function GetDataPhotos(props) {
    const [isLoading, setIsLoading] = useState(true) // [current, update]
    const [loadedDetail, setLoadedDetail] = useState([])

   
    const token = staticToken
    const urlApiPhoto = `${urlApi}:${props.data}`
    
    useEffect(() => {
      setIsLoading(true);
  
      axios({
        method: 'GET',
        url: urlApiPhoto,
        headers: { 'Authorization': `Basic ${token}` },
      }).then(response=> {
        return response.data
      }).then(responseArray => {
        const arrData = []
        for (const key in responseArray.data){
          const objData = {
            id : key,
            ...responseArray.data[key]
          }
          arrData.push(objData)
        }
        setIsLoading(false)
        setLoadedDetail(arrData)
      }).catch(error => {
        console.log(error.response, "error")
      })
    }, [props.data])
  
    if(isLoading){
      return (
        <section >
        <CircularProgress className='loading'/>
      </section>
      )
    }
        
 
      return(
        <Gallery data={loadedDetail}/>
      )
    
}