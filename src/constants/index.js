export const MARCAS=[
    {id:1, nombre:'Europeo'},
    {id:2, nombre:'Americano'},
    {id:3, nombre:'Asiático'}
]

const YERMAX= new Date().getFullYear()

 export const YEARS= Array.from(new Array(30), (valor,index)=>YERMAX-index)

 export const PLANES=[
    {id:1, nombre:'Básico'},
    {id:2, nombre:'Completo'}
   
]