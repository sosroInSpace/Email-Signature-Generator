import React, { Component } from 'react';
import ReactDOM from 'react';

class EmailSignature extends Component {

  constructor(props) {
    super(props);

    this.iframe = React.createRef();
  }

  componentDidMount() {
    this.renderIframe();
  }

  componentDidUpdate() {
    this.renderIframe();
  }

  renderIframe() {

    const content = `
    <html><head><title>Email Signature</title>

    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">

    </head>
    <body style="font-family:'helvetica neue',helvetica,sans-serif;margin:0;padding:0;" >
    <table style="font-family:'helvetica neue',helvetica,sans-serif;padding:15px 0px 15px 15px" cellpadding="0" cellspacing="0" bgcolor='#262726'>
     <tbody>
      <tr>
       <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;border-right:2px solid #333; padding-right:15px; text-align: right; vertical-align:top; " valign="top">
        <table style="font-family:'helvetica neue',helvetica,sans-serif;margin-right:0; margin-left:auto;" cellpadding="0" cellspacing="0" >
         <tbody>
          <tr>
           <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:55px; vertical-align:top; text-align:left;" valign="top" align="left" width="175">
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:14pt; font-weight:bold;color:#82d0e1;font-size:11pt;letter-spacing:1px;text-transform:uppercase">${ this.props.name }<span><br></span></span>
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;font-weight:800;color:#fff;letter-spacing:1px;text-transform:uppercase">${ this.props.jobTitle }</span>
           </td>
          </tr>

          <tr>
           <td style="padding:0;height:29px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:top;padding-top:10px" valign="top" align="left">
            <a href="https://okmg.com" target="_blank"><img nosend="1" alt="Logo" style="height:20px; width:89; border:0; " height="20" border="0"  src="http://res.cloudinary.com/dm8clqmym/image/upload/v1517722663/okmgMiniv4_x3bbu8.jpg"></a>
           </td>
          </tr>
          <tr>
           <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:20px; vertical-align:middle; text-align:left;padding-top:6px" valign="middle" align="left">
            <span><a href="https://www.facebook.com/OKMGAustralia/" target="_blank"><img nosend="1" border="0" width="20" alt="Facebook icon" style="border:0; height:20px; width:20px" src="http://res.cloudinary.com/dm8clqmym/image/upload/v1517722940/faceMiniv4_goxyso.jpg"></a></span>
            <span><a href="https://www.instagram.com/okmg.agency/" target="_blank"><img nosend="1" border="0" width="20" alt="Instagram icon" style="border:0; height:20px; width:20px" src="http://res.cloudinary.com/dm8clqmym/image/upload/v1517723039/instaMiniv4_fgvnq5.jpg"></a> </span>
           </td>
          </tr>
         </tbody>
        </table>
       </td>
       <td style="padding:0;padding-left:15px;font-size:1pt; vertical-align:top; font-family:'helvetica neue',helvetica,sans-serif;" valign="top" width="150">
        <table style="font-family:'helvetica neue',helvetica,sans-serif;" cellpadding="0" cellspacing="0">
         <tbody>


          <tr>
           <td style="padding:0;font-family:'helvetica neue',helvetica,sans-serif;height:40px; vertical-align:top; padding:0; text-align:left;" valign="top" align="left">
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px;"><span style="color:#82d0e1">P:</span> 1300 93 6564 <span><br></span></span>
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px"><span style="color:#82d0e1">M:</span> ${ this.props.mobileNumber } </span>
           </td>
          </tr>
           <tr>
           <td style="padding:0;height:40px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:top; padding:0;" valign="top">
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px"><a target="_blank" href='https://www.google.com.au/maps/dir/-32.0068431,115.75783/OKMG,+608%2F610+Stirling+Hwy,+Mosman+Park+WA+6012/@-32.006831,115.7558296,17z/data=!3m1!4b1!4m16!1m6!3m5!1s0x2a32a41d7bd55031:0xd5f3e59bd0fed14f!2sOKMG!8m2!3d-32.006907!4d115.7582066!4m8!1m1!4e1!1m5!1m1!1s0x2a32a41d7bd55031:0xd5f3e59bd0fed14f!2m2!1d115.7582066!2d-32.006907' style="color:#eee;text-decoration:none !important">608 - 610 Stirling Hwy<span><br></span></span>
            <span style="font-family:'helvetica neue',helvetica,sans-serif;font-size:7pt;color:#eee;letter-spacing:1px">Mosman Park, Perth WA 6012</a>
          </span>
           </td>
          </tr>
          <tr>
           <td style="padding:0;height:20px; font-family:'helvetica neue',helvetica,sans-serif;vertical-align:middle;" valign="middle" align="left">
            <a href="https://okmg.com" target="_blank" style="color:#BD272D; font-size:7pt; font-family:'helvetica neue',helvetica,sans-serif;color:#eee;text-decoration:none !important;letter-spacing:1px;">www.okmg.com</a>
           </td>
          </tr>
         </tbody>
        </table>
       </td>
      </tr>
     </tbody>
    </table>

    </body>
    </html>
    `;

    const doc = this.iframe.current.contentDocument || this.iframe.current.contentWindow.document;

    doc.write(content);
    doc.close();

  }

  render() {
    return <iframe ref={this.iframe} width="400" height="150"/>;
  }
}

export default EmailSignature;
