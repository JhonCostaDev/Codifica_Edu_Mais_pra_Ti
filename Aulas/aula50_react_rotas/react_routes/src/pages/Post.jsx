import { useParams, Link } from "react-router-dom";

export default function Post() {
    const { id } = useParams();

    return (
        <section>
            <h1>Post #{id}</h1>
            <p>You are on Post ID {id}</p>

            <p style={{marginTop: 12}}>
                <Link to="post/100">/post/100</Link>
            </p>
        </section>
    )
}