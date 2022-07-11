import {useState, createContext} from 'react'
import { calcularMarca, calcularPLan, formatearDinero, obtenerDiferenciaYear } from '../helpers'

const CotizadorContext=createContext()

const CotizadorProvider=({children})=>{
    const  [error,setError]=useState('')
    const  [resultado,setResultado]=useState(0)
    const  [cargando,setCargando]=useState(false)
    
    const [datos, setDatos]=useState({
         marca:'',
         year:'',
         plan:''  

    })

     const handleChangeDatos=e=>{
           setDatos({
            ...datos,
            [e.target.name]:e.target.value
           })
         }
    
    const cotizarSeguro=()=>{
        //Una base
         let resultado=2000
        //Obtener la difernecia de años
        const diferencia=  obtenerDiferenciaYear(datos.year)
        console.log(diferencia);
        //Hay que restar el 3% por cada año
            resultado-=((diferencia * 3) * resultado) /100
            //Europeo 30%
        // Americano 15%
        //Asiatico 5%
        resultado*=calcularMarca(datos.marca)

        //Basico 20%
        //Completo 50%
        resultado*=calcularPLan(datos.plan)

         //Formatear dinero
        resultado=formatearDinero(resultado)
       setCargando(true)
       
       setTimeout(() => {
           setResultado(resultado)
           setCargando(false)
        
       }, 3000);
    }
    return(
        <CotizadorContext.Provider
        value={{
            handleChangeDatos,
            datos,
            error,
            setError,
            cotizarSeguro,
            resultado,
            setResultado,
            cargando
        }}
        >

            {children}
        </CotizadorContext.Provider>
    )
}

export{
     CotizadorProvider
}

export default CotizadorContext