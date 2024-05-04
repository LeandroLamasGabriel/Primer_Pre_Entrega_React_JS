import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"
function App() {
  const message = "Bienvenidos a mi segunda web e-commerce con react js"
  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje={message}/>
    </>
  )
}

export default App
