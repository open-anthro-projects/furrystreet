import React from 'react'
import App, { Container } from 'next/app'
import Link from 'next/link'

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.handleNavButtonOnClick = this.handleNavButtonOnClick.bind(this)
        this.state = {menuVisible: false};
      }
    
      handleNavButtonOnClick() {
            this.setState({menuVisible: !this.state.menuVisible})
        }

  render () {
    return <>   
    <div className="nav">
    <button className="material-icons md-light menubutton" onClick={(e) => this.handleNavButtonOnClick()}>
      menu
    </button>
    <div>Navbar</div>
  </div>

{this.state.menuVisible === true &&
    <div id="left" className="column navposition">
        <div className="bottom">
        <Link href="/">
        <a className="menulink" title="Home">
        <div className="menuitem">
        <div className="linkdiv">
          <div className="material-icons md-menu icon">home</div>Home
        </div>
        </div>
        </a>
        </Link>
        <Link href="/about">
        <a className="menulink" title="About">
        <div className="menuitem">
        <div className="linkdiv">
          <div className="material-icons md-menu icon">info</div>About
        </div>
        </div>
        </a>
        </Link>
        </div>
    </div>
    
    }



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
    font-family: Roboto, Arial, sans-serif;
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
    width:100%;
}

.linkdiv{
  display:flex;
  align-items: center;
  height: 40px;
  padding-left: 24px;
  padding-right: 24px;
}

.menuitem {
  width:100%;
}

.menuitem:hover {
  background-color: hsl(0, 0%, 20%);
}

.menulink{
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration:none;
  color:hsla(0, 0%, 100%, 0.88);
}

.icon {
  margin-right: 24px;
}

.info {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 40px;
  padding-bottom: 3px;
  background: linear-gradient(rgba(5,6,6,0),rgba(5,6,6,.95));
  width:100%;
}

.title{
  font-family: open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 1.125rem;
  line-height: 1.3;
  text-shadow: 2px 2px 3px rgba(5,6,6,.5);
}

.sub-title {
  display: block;
  font-size: .75rem;
  font-family: open_sans_bold,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin-bottom: .25rem;
}

#right {
  flex-shrink: 0; 
}

#left {
    flex-shrink: 0;  /*makes sure that content is not cut off in a smaller browser window*/
    z-index: 1030;
    width:240px;
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

.contentheader{
  max-height: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin:auto;
  color:#ffffff;
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

  .material-icons.md-menu { color: hsl(0, 0%, 56%); }
  

  .material-icons :focus {
    outline: 0px;
}

.menubutton{
  padding: 8px;
}
`}</style>
    </>
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout/>
          <Component {...pageProps} />
      </Container>
    )
  }
}