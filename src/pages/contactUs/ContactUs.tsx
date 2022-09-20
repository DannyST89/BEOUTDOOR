import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Formulario } from './components/Formulario'

export const ContactUs = () => {


  const { tour } = useParams(); 
  
  const [messageBase, setMessageBase] = useState('')

  useEffect(() => { 

    if (tour !== "newMessage") {
      setMessageBase("Buenos dias/tardes/noches me gustaria obtener mas informacion sobre " + tour)
    }

  }, [tour, messageBase])  

  return (
    <div>
      <Formulario message={messageBase} />
    </div>
  )
}
