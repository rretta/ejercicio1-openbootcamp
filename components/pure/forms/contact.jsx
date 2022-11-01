import React from "react"
import PropTypes from "prop-types"
import Contact from "../../models/contact.class.js"


const ContactComponent  = ({contact}) =>{

    return(
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h3>Apellido: {contact.lastname}</h3>
            <h4>Email: {contact.email}</h4>
            <h5>Contacto {contact.online?"En Línea":"No Disponible"}</h5>
        </div>
    )
}


ContactComponent.PropTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent