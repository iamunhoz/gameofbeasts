import './App.css'
import Header from 'components/Header/Header'
import Main from 'components/Main/Main'
import SideBar from 'components/SideBar/SideBar'
import Content from 'components/Content/Content'

function App() {
  return (
    <>
      <Header/>
      <Main>
        <SideBar/>
        <Content/>
      </Main>
    </>
  )
}

export default App
