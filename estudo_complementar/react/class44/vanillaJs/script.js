const list = document.getElementById('list');
let itens = `
	<li>React é extremamante popular</li>
    <li>Facilita a criação de interfaces de usuário complexas e interativas</li>
    <li>É poderoso e flexível</li>
    <li>Possui um ecossistema muito ativo e versátil</li>
`;
list.innerHTML = itens;

function content(button) {


	if(button == 2) {
		itens = `
			<li>Componentes, JSX e Props</li>
      		<li>Estado</li>
      		<li>Hooks(Ex: userEffect())</li>
      		<li>Renderização dinâmica</li>
		`
	} else if (button == 3) {
		itens = `
			<li>Página oficial(react.dev)</li>
      		<li>Next.js(Framework FullStack)</li>
      		<li>React Native (Contrua aplicativos móveis nativos com React)</li>
      		
		`
	} else {
		itens = `
			<li>React é extremamante popular</li>
      		<li>Facilita a criação de interfaces de usuário complexas e interativas</li>
      		<li>É poderoso e flexível</li>
      		<li>Possui um ecossistema muito ativo e versátil</li>
		`
	}

	list.innerHTML = itens;
}