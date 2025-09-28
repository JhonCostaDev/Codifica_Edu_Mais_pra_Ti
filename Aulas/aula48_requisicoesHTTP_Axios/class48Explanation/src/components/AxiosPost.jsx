import { useState } from "react";
import axios from 'axios'; 

const AxiosPost = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError]  = useState(null);
    const [loading, setLoading]  = useState(false);
    const apiURL = "https://jsonplaceholder.typicode.com/posts";
    const creatUser = async () => {
        const newUser = {
            name: name,
            email: email
        }

        try {
            const response = await axios.post(apiURL, newUser);
            setMessage(`Usuário ${response.data.name} foi criado com sucesso.`);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Criar novo usuário</h2>
            <div>
                <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <button onClick={creatUser} disabled={loading}>{loading ? "enviando": "Criar usuario"}</button>

            {message && <p>{message}</p>}
        </div>
    )
}

export default AxiosPost;