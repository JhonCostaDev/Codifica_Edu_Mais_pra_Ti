import { useAuth } from "../context/auth";
function Header() {
    const { user, login, logout } = useAuth();

    return (
        <header>
            {user ? (
                <>
                    <span>Hello User, {user.name}</span>
                    <button onClick={logout}>Exit</button>
                </>
            ) : (
                    <button onClick={() => login("Jhon")}>Entrar</button>
                )
            }

        </header>
    )
}

export default Header;