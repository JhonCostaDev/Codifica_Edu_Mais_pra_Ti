class Content extends React.Component {
    render() {
        return (
            <div className="conten">
                <div className="line"></div>

                {/* timeline item */}
                <div className="item">
                    <div className="avatar">
                        <img src="http://www.croop.cl/UI/twitter/images/doug.jpg" alt="" /> 
                        Doug
                    </div>

                    <span className="time">An hour ago</span>
                    <p>Ate lunch</p>
                    <div className="commentCount">2</div>
                </div>

                {/* ... */}
            </div>
        )
    }
}
export default Content;