import { ItemContainer } from "./styles"

function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return (

        <ItemContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a className="ver" href={repo.html_url} rel="noreferrer" target="_blank">ver repositório</a><br/>
            <a className="remover" rel="noreferrer"  href="#">remover</a>
            <hr/>
        </ItemContainer>
    )   
}

export default ItemRepo