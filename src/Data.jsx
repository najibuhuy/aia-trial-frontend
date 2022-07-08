import './gallery.css'
import {useState, useEffect} from 'react';
import Gallery from './Gallery';
import {staticToken, urlApi} from './api'
const axios = require('axios');

export default function GetDataPhotos() {
    const [isLoading, setIsLoading] = useState(true) // [current, update]
    const [loadedDetail, setLoadedDetail] = useState([])
    const token = staticToken
    const urlApiPhoto = urlApi
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
    }, [])
  
    if(isLoading){
      return (
        <section>
          <p>Loading ...</p>
        </section>
      )
    }
        
 
      return(
        <Gallery data={loadedDetail}/>
      )
    
}