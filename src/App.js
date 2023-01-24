import { useRoutes } from 'react-router-dom'
import { routes } from './Routes'

function App() {

  let content = useRoutes(routes)

    return (
      <>
        {content}
      </>
    )
}

export default App;
