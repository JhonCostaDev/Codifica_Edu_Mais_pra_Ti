import axios from "axios";

const PostWithAxios = () => {
    const data = {
        name: "Fulio Fofinho",
        email: "fofura@pegabarata.com"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts", data)
    .then( response => console.log(response.data))
    .catch(erro => console.error(erro))
    return (
        <div>
            <p>Foi</p>
        </div>
    )
}

export default PostWithAxios;