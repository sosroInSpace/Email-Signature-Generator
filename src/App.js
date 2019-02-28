import React, { Component } from 'react';
import EmailSignature from './EmailSignature.jsx';
import logo from './images/okmg-new.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // Email signature form.
      name: '',
      mobileNumber: '',
      jobTitle: '',
      copied: false,

    };

    this.iframe = React.createRef();
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleMobile= this.handleMobile.bind(this);
    this.handleClickCopy= this.handleClickCopy.bind(this);
  }

    handleChangeName(event) {
      this.setState({ name: event.target.value });
    }

  handleChangeTitle(event){
    this.setState({ jobTitle: event.target.value});
  }

  handleMobile(event){
    this.setState({ mobileNumber: event.target.value});
  }

    getIframe() {
    return this.iframe.current.iframe.current.contentDocument;
  }

    handleClickCopy(event) {
    event.preventDefault();

     const doc = this.getIframe();

     console.log(doc);
    
     doc.execCommand("selectAll");
     doc.execCommand("copy");

     this.setState({'copied': true });
  }

  render() {

            const { copied } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <div className="filter"></div>
          <div className="header-wrapper">
            <img src={logo} alt="okmg"/>

            <h1 className="App-title">Signature builder</h1>
          </div>
          <ul>
            <li>1. Fill in your details</li>
            <li>2. Click onto the signature within the <span style={{color:'#F44336;fontWeight:bold'}}>red</span> box</li>
            <li>3. Command + A / Ctrl + A ( select all ) > Command + C / Ctrl + C ( copy )</li>
            <li>4. Open Gmail > Settings > Command + V / Ctrl + V ( paste into signature box) > Save</li>
            <li>5. Done! </li>
          </ul>
        </header>
        <div className="line-one"></div>
        <p className="App-intro">
          <div className="field-wrapper">
            <h5>Enter your Name</h5>
            <input value={this.state.name} onChange={this.handleChangeName}/>
          </div>
          <div className="field-wrapper">
            <h5>Enter your Job Title</h5>
            <input value={this.state.jobTitle} onChange={this.handleChangeTitle}/>
          </div>
          <div className="field-wrapper">
            <h5>Enter your Mobile Number</h5>
            <input value={this.state.mobileNumber} onChange={this.handleMobile}/>
          </div>
        </p>
        <div className="signature-container">

          <EmailSignature
            name={this.state.name}
            mobileNumber={this.state.mobileNumber}
            jobTitle={this.state.jobTitle}
            ref={this.iframe}
            />

            <button
            className="button copyButton"
            onClick={this.handleClickCopy}
            onBlur={this.handleBlurCopy}
            >
          { copied ? 'Copied!' : 'Copy' }
          </button>

        </div>
      </div>
    );
  }
}

export default App;
