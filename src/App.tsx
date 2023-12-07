import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prevent from './prevention/prevent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Prevent 
    title={"coucou"}
    contents={["coucou", "coucou"]}
    imgs={["https://www.actu-environnement.com/images/illustrations/news/38004_large.jpg", "https://escapadeglaz.fr/wp-content/uploads/2021/05/Les-calottes-sont-cuites-02-Fresque-Climat-Escapade-Glaz.jpg"]}
/>
     
    
    </>
  )
}

export default App
