import React, { Component } from 'react';
import Yokai from "../static/yokai.png"
import Kaoru from "../static/kaoru.png"
import Test from "../static/test.png"
import Test3 from "../static/test3.png"
import ad300250 from "../static/ad300250.png"

class Artwork extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

    render() {
      return <>
      <div className="container">
        <div className="content">
          <figure className="test">
            <img className="imagetest" src={Kaoru}></img>
         </figure>
        </div>
      
      <div className="sidecolumn">
        <div className="side">
        <img className="adtest" src={ad300250}></img>
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

      <div className="title">
      <h1>{this.props.postId}</h1>
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
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, auto);
  grid-auto-flow: row;
}

figure{
  margin: 0px;
}

.content{
  grid-column: 1 / 21;
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  order:1;
}

.title{
  grid-column: 1 / 21;
  order:2;
}

@media (min-width: 1025px) {
.container {
  grid-template-columns: repeat(16, 1fr) repeat(4, 80px);
  grid-template-rows: repeat(20, auto);
  grid-auto-flow: row;
}

.content{
  margin-top: 1em;
  grid-column: 1 / 17;
}

.title {
  grid-column: 1 / 17;
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
  background-color:hsl(0, 0%, 11%);
  grid-column: 1 / 21;
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