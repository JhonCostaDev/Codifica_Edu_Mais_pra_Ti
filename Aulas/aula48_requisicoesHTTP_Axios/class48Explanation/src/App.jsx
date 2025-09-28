import AxiosPost from "./components/AxiosPost"
import AxiosUser from "./components/AxiosUser"
import FetchUsers from "./components/FetchUser"
import PostWithAxios from "./components/PostWithAxios"


function App() {
 

  return (
    <>
      <h1>Aula 48 - HttP Requests</h1>
      <h2>Usando Fetch</h2>
      <FetchUsers />
      <h2>Usando Axios</h2>
      <AxiosUser />

      <h2>Using POST Method</h2>
      <PostWithAxios />

      <h2>Axios Post Prof</h2>
      <AxiosPost />

    </>
  )
}

export default App
