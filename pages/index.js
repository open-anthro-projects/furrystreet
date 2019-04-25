const Index = () => (
  <div>
    <div className="nav">
    <button className="material-icons md-light">
      menu
    </button>
      Navbar
    </div>
    <p>Hello World!</p>

  <style jsx global>{`
  body {
    background-color: hsl(0, 0%, 7%);
    min-height: 75rem;
    padding-top: 4.5rem;
    margin: 0px;
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
    justify-content: space-between;
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
</div>
)

export default Index