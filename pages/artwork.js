import React, { Component } from 'react';
import Yokai from "../static/yokai.png"
import Kaoru from "../static/kaoru.png"
import Test from "../static/test.png"
import Test3 from "../static/test3.png"
import ad300250 from "../static/ad300250.png"
import icon from "../static/kemukujara-1992.gif"

class Artwork extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

    render() {
      return <>
      <div className="container">
        <div className="content">
          <figure className="test">
            <img className="imagetest" src={Yokai}></img>
         </figure>
        </div>
      
      <div className="sidecolumn">
        <div className="side">
        <img className="adtest" src={ad300250}></img>
			
        </div>
      </div>

      <div className="primary-info">
      <h1>Yokai Takuma</h1>
      <div className="info">
        <div className="views">
          0 views
        </div>
        <div className="favorite">
          <li className="material-icons md-grey articon">
            favorite
          </li>
          <div className="favcounter">
          0
          </div>
        </div>
        <div className="favorite">
          <li className="material-icons md-grey articon">
            share
          </li>
          <div className="favcounter">
          Share
          </div>
        </div>
        <div className="favorite">
          <li className="material-icons md-grey articon">
          remove_circle
          </li>
          <div className="favcounter">
          Request takedown
          </div>
          
        </div>
        <div className="favorite">
        <li className="material-icons md-grey articon">
          report
          </li>
          <div className="favcounter">
          Report problem
          </div>
          </div>


      </div>
      </div>

      <div className="primary-info">
        <h2>Artist:</h2>
        <h2>TV_Thari</h2>
        <h2>Featuring:</h2>
        <div>Takuma from <img className="avatar" src={icon}></img> Kemukujara-1992</div>
      </div>

      </div>

      <style jsx global>{`
  .navposition{
    position: fixed;
  }
  `}</style>
      <style jsx>{`

.container {
  display: grid;
  width:100%;
  overflow-y: auto;
  grid-template-columns: 16px auto 16px;
  grid-template-rows: repeat(20, auto);
  grid-auto-flow: row;
}

.avatar{
  width:50px;
  height:50px;
}

.material-icons.md-grey { color: #aaaaaa; }

figure{
  margin: 0px;
  max-height:calc(100vh - 88px);
}

.content{
  grid-column: 1 / 4;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  order:1;
}

.articon {
  position: relative;
  /* Adjust these values accordingly */
  top: 3px;
  left: 3px;
  font-size: 20px;
  padding-right: 8px;
}


.favcounter{
  display: inline-block;
}

.primary-info{
  grid-column:  2 / 3;
  order:2;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 8px;
}

h1{
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  margin:0px;
  padding-top: 16px;
}

h2{
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  margin:0px;
  padding-top: 16px;
}

h3{
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  margin:0px;
  padding-top: 16px;
}

.info{
  width:100%;
  display: flex;
  flex-direction: row;
  color:#aaaaaa;
  font-size: 1.1rem;
  line-height: 2rem;

}

.favorite{
  flex:1;
  justify-self: flex-end;  
}

.views{
  flex:1;
  font-weight: 400;
}

@media (min-width: 1025px) {
.container {
  grid-template-columns: 16px repeat(14, auto) 16px repeat(4, 80px);
  grid-template-rows: repeat(20, auto);
  grid-auto-flow: row;
}

.content{
  margin-top: 1em;
  margin-bottom: 1em;
  grid-column: 1 / 17;
}

.primary-info {
  grid-column: 2 / 16;
  border-top: 1px solid #2a2a2a;
}

h1{
  padding-top: 16px;
}

}

.imagetest{
  max-width: 100%;
  height: auto;
  max-height:calc(100vh - 88px);
  align-self:center;
}

.adtest{
  max-width: 100%;
  height: auto;
  max-height:calc(100vh - 88px);
  align-self:center;
  margin:auto;
  padding-top:1em;
}

.test99{
  display: flex;
}

.test100{
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: auto;  /*adds scroll to this container*/
  justify-content:flex-end;
}

.test102{
  display:flex;
  text-align:center;
  align-self: flex-start;
  margin-right: auto;
  margin-left: auto;
  flex:0 0 75%;
}
.test104{
  display:flex;
  text-align:center;
  align-self: flex-start;
  margin-right: auto;
  margin-left: auto;
  flex:0 0 75%;
}

.layout {
}
@media (min-width: 1024px) {

.layout {
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 0 0 100%;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  flex-wrap: wrap;
  align-self: stretch;
  flex-basis: 79%;
  overflow-y: auto;
  
}
  }

.submission{
}

@media (min-width: 1024px) {

.submission{
  height:100%;
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
}

}

.sidecolumn {
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  grid-column: 2 / 3;
  order:3;
}

@media (min-width: 1025px) {

.sidecolumn {
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  background-color:hsl(0, 0%, 11%);
  grid-column: 17 / 21;
  grid-row: 1 / 4;
}

}

.side {
  overflow-y: auto;  /*adds scroll to this container*/
  align-items:center;
  display:flex;
  flex-direction: column;

}

.test3{
  flex: 1 1 80%;
}



`}</style>


      </>;
    }
  }
  
  export default Artwork;