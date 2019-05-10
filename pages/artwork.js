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
      <div className="layout">
      <div className="submission">
      <figure className="test">
      <img className="imagetest" src={Yokai}></img>
      </figure>
      <div>
      <h1>{this.props.postId}</h1>
      </div>
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
        </div>
      </div>
      </div>


      <style jsx global>{`
  .navposition{
    position: fixed;
  }
  `}</style>
      <style jsx>{`

.imagetest{
  max-width: 100%;
  height: auto;
  max-height:calc(100vh - 88px);
  align-self:center;
  margin:auto;
}

.adtest{
  max-width: 100%;
  height: auto;
  max-height:calc(100vh - 88px);
  align-self:center;
  margin:auto;
  padding-top:1em;
}

.test{
  align-items: center;
  display:flex;
  text-align:center;
}

.layout {
  width: 100%;
}
@media (min-width: 1024px) {

.layout {
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: row;  /*places the left and right headers above the bottom content*/
  width: 100%;
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 0.000000001px;
  flex-basis: 0.000000001px;
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  flex-wrap: wrap;
}
  }

.submission{
  width:100%;
}

@media (min-width: 1024px) {

.submission{
  height:100%;
  flex: 1 1 80%;
  width:100%;
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

@media (min-width: 1024px) {

.sidecolumn {
  height: 100%;  /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;  /*places the left and right headers above the bottom content*/
  flex: 0 0 25rem;
  background-color:hsl(0, 0%, 11%);
}

}

.side {
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
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