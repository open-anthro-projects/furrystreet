import React, { Component } from 'react';

class Index extends Component {

  constructor(props) {
    super(props);
    this.handleNavButtonOnClick = this.handleNavButtonOnClick.bind(this)
    this.state = {menuVisible: false};
  }

  handleNavButtonOnClick() {
		this.setState({menuVisible: !this.state.menuVisible})
	}

  render() {
    return (
  <>
    <div className="nav">
      <button className="material-icons md-light" onClick={(e) => this.handleNavButtonOnClick()}>
        menu
      </button>
      <div>Navbar</div>
    </div>

    {this.state.menuVisible === true &&
    <div id="left" className="column">
        <div className="bottom">
        <p>one</p>
				<p>two</p>
				<p>three</p>
				<p>four</p>
				<p>five</p>
				<p>six</p>
				<p>seven</p>
				<p>eight</p>
				<p>nine</p>
				<p>ten</p>
				<p>eleven</p>
				<p>twelve</p>
				<p>thirteen</p>
				<p>fourteen</p>
				<p>fifteen</p>
				<p>sixteen</p>
				<p>seventeen</p>
				<p>eighteen</p>
				<p>nineteen</p>
				<p>twenty</p>
				<p>twenty-one</p>
				<p>twenty-two</p>
				<p>twenty-three</p>
				<p>twenty-four</p>
				<p>twenty-five</p>
				<p>twenty-six</p>
				<p>twenty-seven</p>
				<p>twenty-eight</p>
				<p>twenty-nine</p>
				<p>thirty</p>
        </div>
    </div>
    }
    <div id="right" className="column">
        <div className="bottomright">
        <div className="cp">
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
        <div className="cptest">one</div>
				<p>two</p>
				<p>three</p>
				<p>four</p>
				<p>five</p>
				<p>six</p>
				<p>seven</p>
				<p>eight</p>
				<p>nine</p>
				<p>ten</p>
				<p>eleven</p>
				<p>twelve</p>
				<p>thirteen</p>
				<p>fourteen</p>
				<p>fifteen</p>
				<p>sixteen</p>
        </div>
        <p>one</p>
				<p>two</p>
				<p>three</p>
				<p>four</p>
				<p>five</p>
				<p>six</p>
				<p>seven</p>
				<p>eight</p>
				<p>nine</p>
				<p>ten</p>
				<p>eleven</p>
				<p>twelve</p>
				<p>thirteen</p>
				<p>fourteen</p>
				<p>fifteen</p>
				<p>sixteen</p>
				<p>seventeen</p>
				<p>eighteen</p>
				<p>nineteen</p>
				<p>twenty</p>
				<p>twenty-one</p>
				<p>twenty-two</p>
				<p>twenty-three</p>
				<p>twenty-four</p>
				<p>twenty-five</p>
				<p>twenty-six</p>
				<p>twenty-seven</p>
				<p>twenty-eight</p>
				<p>twenty-nine</p>
				<p>thirty</p>
        </div>
    </div>

    


  <style jsx global>{`
  body {
    background-color: hsl(0, 0%, 7%);
    height: 100%;
    overflow: hidden;  /*makes the body non-scrollable (we will add scrolling to the sidebar and main content containers)*/
    margin: 0px;  /*removes default style*/
    box-sizing: border-box;
    width:100%;
    padding-top: 56px;
    color:hsl(60, 18%, 87%);
  }

  html {
    height: 100%;
  }

  #__next{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    height: 100%;
    margin: 0px;
    top: 0;
    right: 0;
    left: 0;
    
  }
  
  .column {
    height: 100%;  /*allows both columns to span the full height of the browser window*/
    display: flex;
    flex-direction: column;  /*places the left and right headers above the bottom content*/
    width: 100%;
    

}

.cp{
  width: 83.33333333333333%;
  margin:auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cptest {
  width: 20%;
}

#right {
  flex-shrink: 0; 
  justify-content: center;
}

#left {
    flex-shrink: 0;  /*makes sure that content is not cut off in a smaller browser window*/
    z-index: 1030;
    position: fixed;
    width: 240px;
    background-color: hsl(0, 0%, 11%);
}

.top-left {
    flex-shink: 0;
}

.top-right {
    flex-shrink: 0;
    display: inline-flex;
}

ul {
    display: inline-flex;
    list-style: none;
}

.bottom {
    flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
    overflow-y: auto;  /*adds scroll to this container*/
    
}

.bottomright {
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
  text-align: center;
  align-items: center;
  justify-content: center;
}



  .app-drawer {
    position: fixed;
    top: -120px;
    right: 0;
    bottom: -120px;
    left: 0;
    transition-property: visibility;
    z-index: 1030;
}
.content-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 256px;
    padding: 120px 0;
    transition-property: -webkit-transform;
    transition-property: transform;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    background-color: #FFF;
}
.wrapper2 {
height: 100%;
    display: flex;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    z-index: 1030;
}

.content {
  background: hsl(0, 0%, 11%);
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  display: flex;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
  z-index: 1030;
}

.item{
  display: flex;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
}

  .wrapper {
    min-height: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}

.main-content {
    margin-top: 70px;
}

  .menu {
    display: flex;
    flex-direction: column;
    z-index: 1030;
    position: fixed;
    top: 56px;
    background: #272727;
    width: 240px;
  }

  .menu2 {
    display: flex;
    flex-direction: column;
    z-index: 1030;
    position: relative;
    top: 56px;
    background: #272727;
    width: 240px;
  }

  .menuContainer{
    min-height: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 240px;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    background: #272727;
    height: 56px;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'),
      local('MaterialIcons-Regular'),
      url(/static/MaterialIcons-Regular.woff) format('woff');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    background: none;
    border: none;
    padding: 0;
  
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
  }
  .material-icons.md-light { color: #ffffff; }


  .material-icons :focus {
    outline: 0px;
}
`}</style>
</>
)}}

export default Index

