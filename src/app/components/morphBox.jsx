let React = require('react');

var MorphBox = React.createClass({
	
	getInitialState() {
		return {
			left : 0,
			top : 0,
			image : "img/landscape.jpg",
			boxClass : "box"
		};
	},

	changeOpen() {
		this.setState({
			boxClass : "box active open"
		});
	},

	changeClose() {
		this.setState({
			boxClass : "box"
		});
	},

	handleScroll() {
		let button = this.refs.imgPosition.getDOMNode();
	    let buttonPos = button.getBoundingClientRect();
	    console.log(buttonPos);
	    this.setState({
	      left : buttonPos.left,
	      top : buttonPos.top
	    });
	},

	componentDidMount() {
	    let button = this.refs.imgPosition.getDOMNode();
	    let buttonPos = button.getBoundingClientRect();
	    console.log(buttonPos);
	    this.setState({
	      left : buttonPos.left,
	      top : buttonPos.top
	    });
	    window.addEventListener('scroll', this.handleScroll);
	  },

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	},

	render() {

		var styles = {
	      left: this.state.left,
	      top: this.state.top
	    };

		return (
			<div className={this.state.boxClass}>
				<div onClick={this.changeOpen} className="box-main">
					<div ref="imgPosition" className="box-img">
						<img alt="alt text" src={this.state.image} />
					</div>
					<div className="box-inner">
						<p>Lorem ipsum dolor sit amet.<br/>Consectetur adipiscing elit.</p>
					</div>
				</div>
				<div style={styles} className="box-content">
					<img src={'img/landscape.jpg'} alt="Background Image"/>
					<span onClick={this.changeClose} className="icon-close">close</span>
				</div>
			</div>
		);
	}
});

module.exports = MorphBox;