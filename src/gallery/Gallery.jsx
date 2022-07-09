import React from 'react'
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from 'react'

export default function Gallery(props) {
    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImg] =useState('')
    let data = props.data
    const getImg = (imgSrc) =>{
        setTempImg(imgSrc);
        setModel(true);
    }
  return (
      <>
         <div className= {model? "model open": "model"}  >
            <img src={tempImgSrc} />
            <CloseIcon onClick={() => setModel(false)}/>
         </div>
         
         <div className='gallery'>
        {
            data.map((item,id)=>{
                return(
                    <div className='pics' key={id} onClick={() => getImg(item.media.m)}>
                        <img className='pictures' src={item.media.m} />
                    </div>
                )
                
            })
        }
        </div>
      </>
   
  )
}
