import { useState } from "react";
import gitLogo from "../assets/imgs/logo.png"
import Input from "../components/Input";
import Button from "../components/Button";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    try {

      const { data } =  await api.get(`repos/${currentRepo}`)
    
    if(data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
    if(!isExist) {
      setRepos(prev =>  [...prev, data])
    setCurrentRepo('')
  return
} else {
  alert('Repositorio repetido!')
}
}

} catch (error) {
  if (error.response && error.response.status === 404) {
    alert('Repositório não encontrado!');
  } else {
    console.error(error);
    alert('Ocorreu um erro ao buscar o repositório!');
  }
}
  }

const handleRemoveRepo = (id) => {
   setRepos(repos.filter(repo => repo.id !== id))
}


  return (
    <Container >
      <img 
        src={gitLogo} 
        width={72}
        height={72}
        alt="logo github" 
      />
      <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value) } />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  )
}

export default App;
