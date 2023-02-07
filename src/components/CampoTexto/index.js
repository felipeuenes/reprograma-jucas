import './CampoTexto.css'



const CampoTexto = (props) => {
    console.log(props);


   
    
    
    const aoDigitar = (evento) => {
      props.aoAlterado(evento.target.value)
    }


    return(
       <div className="campo-texto">
        <label htmlFor='input'>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} id='input'/>
       </div>
    )
}

export default CampoTexto;