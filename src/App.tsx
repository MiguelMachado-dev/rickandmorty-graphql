import { useCharactersData } from 'helpers/useCharactersData'

function App() {
  const charactersQuery = useCharactersData()

  if (charactersQuery.isLoading) return <p>Loading...</p>

  if (charactersQuery.isError)
    return <p>Error: {charactersQuery.error.message}</p>

  return (
    <div className="App">
      <h2>Hello, World</h2>

      {charactersQuery.data ? (
        <div>
          {charactersQuery.data?.characters.results.map((character) => (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default App
