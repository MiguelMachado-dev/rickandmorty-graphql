import { useCharactersData } from 'helpers/useCharactersData'

function App() {
  const charactersQuery = useCharactersData()
  const charactersData = charactersQuery.data?.characters?.results ?? []

  if (charactersQuery.isError)
    return <p>Error: {charactersQuery.error.message}</p>

  return (
    <div className="App">
      <h2>Rick and Morty - GraphQL, React Query and TypeScript project</h2>

      {charactersQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {charactersData.map((character) => (
            <div key={character?.id}>
              <h3>{character?.name}</h3>
              <img src={character?.image ?? ''} alt={character?.name ?? ''} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
