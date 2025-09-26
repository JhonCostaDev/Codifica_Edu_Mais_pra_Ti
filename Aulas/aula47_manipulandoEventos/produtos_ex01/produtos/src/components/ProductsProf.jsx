import { useState } from "react";

function ProductsProf() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Eletrônicos");
    const [description, setDescription] = useState("");

    const [products, setProducts] = useState([]);

    const handleNameChange = (e) => setProductName(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleCategoryChange = (e) => setCategory(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleAddProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(price).toFixed(2),
            category,
            description
        }

        setProducts([...products, newProduct]);

        setProductName("");
        setPrice("");
        setDescription("");

    }

    return (
        <div className="productsProf">
            <h1>Cadastro Produtos - Solução Professor!</h1>

            <form onSubmit={handleAddProduct}>
                <label>
                    Nome do Produto:
                    <input type="text" value={productName} onChange={handleNameChange} />
                </label>

                <label>
                    Preço:
                    <input type="text" value={price} onChange={handlePriceChange} />
                </label>

                <label>
                    Categoria:
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Esportivos">Esportivos</option>
                        <option value="Brinquedos">Brinquedos</option>
                    </select>
                </label>

                <label>
                    Descrição:
                    <input type="text" value={description} onChange={handleDescriptionChange} />
                </label>

                <button type="submit">Adicionar Produto</button>
            </form>

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.price} - {product.category}
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsProf;