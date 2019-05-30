import React, { Component } from 'react';
import Link from 'next/link'

import Takuma from "../static/Takuma.jpeg"
import Yokai from "../static/yokai.png"
import Kaoru from "../static/kaoru.png"
import Icon from "../static/icon.png"
import Come from "../static/come.jpg"
import Ninja from "../static/ninja.png"

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
    <div id="right" className="content">
    <span className="contentheader">Recent Artwork</span>
        <div className="cp">
        
        <Link href={{ pathname: '/artwork', query: { id: '2' } }} as='/artwork/2/Yokai-Takuma'>
        <a><figure className="cptest"><img className="cptestImage" src={Yokai}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure></a>
        </Link>
        <figure className="cptest"><img className="cptestImage" src={Come}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <figure className="cptest"><img className="cptestImage" src={Takuma}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <figure className="cptest"><img className="cptestImage" src={Kaoru}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <figure className="cptest"><img className="cptestImage" src={Ninja}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <figure className="cptest"><img className="cptestImage" src={Come}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <figure className="cptest"><img className="cptestImage" src={Icon}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <div className="cptest"><img className="cptestImage" src={Kaoru}></img></div>
        <div className="cptest"><img className="cptestImage" src={Takuma}></img></div>
        <div className="cptest"><img className="cptestImage" src={Yokai}></img></div>
        <figure className="cptest"><img className="cptestImage" src={Come}></img><div className="img__description"><figcaption className="info"><span className="title">Yokai Takuma</span><span className="sub-title">by TV_thari</span></figcaption></div></figure>
        <div className="cptest"><img className="cptestImage" src={Ninja}></img></div>
        
        </div>

      <span className="contentheader">Recent Offers</span>  
        <div className="cp">
        <div className="cptest"><img className="cptestImage" src={Yokai}></img></div>
        <div className="cptest"><img className="cptestImage" src={Come}></img></div>
        <div className="cptest"><img className="cptestImage" src={Takuma}></img></div>
        <div className="cptest"><img className="cptestImage" src={Kaoru}></img></div>
        <div className="cptest"><img className="cptestImage" src={Ninja}></img></div>
        <div className="cptest"><img className="cptestImage" src={Come}></img></div>
        <div className="cptest"><img className="cptestImage" src={Icon}></img></div>
        <div className="cptest"><img className="cptestImage" src={Kaoru}></img></div>
        <div className="cptest"><img className="cptestImage" src={Takuma}></img></div>
        <div className="cptest"><img className="cptestImage" src={Yokai}></img></div>
        <div className="cptest"><img className="cptestImage" src={Come}></img></div>
        <div className="cptest"><img className="cptestImage" src={Ninja}></img></div>
        </div>
    </div>

  <style jsx global>{`
  .navposition{
    position: relative;
  }
  `}</style>
    
  <style jsx>{`
  html {
    height: 100%;
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
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
    flex:1;
  }

.content {
  padding-top:16px;
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  width: 100%;
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/

  }

.cp{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1;
}

.cptest {
  margin-right: 16px;
  margin-left:16px;
  margin-top: 16px;
  margin-bottom: 16px;
  position: relative;  
  min-width: auto;
}

.cptest:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.cptestImage {
  max-height:250px;
  min-height:250px;
}

.img__description {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;
  margin:0px;
  align-self:flex-end;
  display: flex;
    align-items: flex-end;
  max-height:250px;
  min-height:250px;
  vertical-align: bottom;
  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
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

.imagetest{
  height:100%;
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

`}</style>
</>
)}}

export default Index

