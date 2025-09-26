class Header extends React.Component{
    render() {
        return (
            <div className="header">
                <div className="fa-mor"></div>
                <span className="title">Timeline</span>

                <input type="text" className="searchInput" placeholder="Search ..." />

                <div className="fa-search"><p>Aqui</p></div>
            </div>
        );
    }
}

export default Header;