import { useState } from 'react';
const content = [
  {
    label: "Principais Recursos",
    items: [
      "Componentes, JSX e Props",
      "Estado",
      "Hooks(Ex: userEffect())",
      "Renderização dinâmica"
    ]
  },
  {
    label: "Recursos Relacionados",
    items: [
      "Página oficial(react.dev)",
      "Next.js(Framework FullStack)",
      "React Native (Contrua aplicativos móveis nativos com React)"
    ]
  },
  {
    label: "Porque utilizar React",
    items: [
      "React é extremamante popular",
      "Facilita a criação de interfaces de usuário complexas e interativas",
      "É poderoso e flexível",
      "Possui um ecossistema muito ativo e versátil"
    ]
  },
]

function App() {
  
  const [indexAbaAtiva, atualizaIndexAbaAtiva] = useState(0);
  return (
    <>
      <div>
        <header>
          <h1>ReactJs</h1>
          <p>JavaScript Com React Vite</p>
        </header>
      </div>

      <div>
        <menu>
          {content.map((tab, index) => (
            <button key={tab.label} onClick={() => atualizaIndexAbaAtiva(index)}>{tab.label}</button>
          ))}
        </menu>
      </div>

      <div>
        <ul>
          {content[indexAbaAtiva].items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
