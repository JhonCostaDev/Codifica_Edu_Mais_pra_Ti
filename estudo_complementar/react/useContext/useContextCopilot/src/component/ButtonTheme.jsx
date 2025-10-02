import { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";

function ButtonTheme() {
    const { theme, changeTheme } = useContext(ContextTheme);

    return (
        <button onClick={changeTheme}>
            Tema atual: {theme} (Clique para mudar)
        </button>
    )
}

export default ButtonTheme;