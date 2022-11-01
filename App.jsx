
import './App.css'
import { Contact } from './components/models/contact.class'
import ContactComponent from './components/pure/forms/contact'

function App() {
  
  const nuevoContacto = new Contact("Ezequiel", "Testing", "testing@hotmail.com", true)
  return (
    <div className="App">
     <h1>test</h1>
     <ContactComponent contact={nuevoContacto}/>
    </div>
  )
}

export default App
