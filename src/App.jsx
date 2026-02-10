import './app.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'

function App() {
  const date = Date()
  console.log(date)

  return (
   <main>
    <Nav />
    <Doc />
   </main>
  )
}

export default App
