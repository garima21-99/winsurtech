import logo from '../images/al3-logo-01.png'
import e_sign from  '../images/esign-online-transparent.png'
import image from '../images/WJ (100 × 40 px) (65 × 40 px) (6).png'
import { Button } from '@mui/material'
const OtherSolutions=()=>{
    return(
        <>
        <div className="py-5 container other_solutions mb-5">

<h1 className='text-center'>Our Other Solutions</h1>
<div className="row">
 
      <div className="col-3">
    <div className="card prod_container">
      <div className="content">
        <div className="front">
          <img className="profile" width="100%" src={logo} alt="Neymar" />
          <h2 className='h5 other_solution_heading'>ACORD Forms Prefill and COI (ACORD 25)</h2>
        </div>
        <div className="back from-left">
          <h2 className='h5 '>Autofill ACORD or other Forms in the Browser</h2>
          <p className="des">
          Autofill PDF forms with data, Edit in the browser, Get forms E-Signed, Save PDF & data back to your system.<br/>
          <a href='https://formcruise.com/'><Button variant="contained">Visit for more info</Button></a>

          </p>

          
        </div>
      </div>
    </div>
  </div>


  <div className="col-3">
    <div className="card prod_container">
      <div className="content">
        <div className="front">
          <img className="profile" width="100%" src={logo} alt="Ronaldo" />
          <h2 className='h5 other_solution_heading'>Data Extraction from ACORD and other Forms </h2>
        </div>
        <div className="back from-bottom">
          <h2 className='h5'> WinsurTech Document Reader</h2>
         
       
          <p className="des">
            Extract data from any Editable PDF forms like ACORD Forms, IRS. GOV forms, and other similar forms.<br/>
            Extract data from Readonly flattened PDF forms or scanned forms and images.
        <a href='https://docreader.winsurtech.com/'><Button variant="contained">Visit for more info</Button></a>

          </p>
          
        </div>
      </div>
    </div>
  </div>



  
  
      <div className="col-3">
    <div className="card prod_container">
      <div className="content">
        <div c="front">
          <img className="profile" width="100%" src={e_sign} alt="Messi" />
          <h2 className='h5 other_solution_heading'>Digital Signatures (ESign Online)</h2>
        </div>
        <div className="back from-right">
          <h2 className='h5 '>Digital Signatures (ESign Online)</h2>
          <p className="des">
          Get your documents digitally signed for free with ESign Online<br/>

Send Document, Get it E-Signed, Track for free, Pay only for advanced features<br/>
<a href='https://dev.esign.webnerserver.com/'><Button variant="contained">Visit for more info</Button></a>

          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="col-3">
    <div className="card prod_container">
      <div className="content">
        <div className="front">
          <img className="profile" width="100%" src={image} alt="Messi" />
          <h2 className='h5 other_solution_heading'>WinsurTech Junction</h2>
        </div>
        <div className="back from-right">
          <h2 className='h5 '>InsurTech File Distribution Made Simple</h2>
          <p className="des">
          A better way to share Policy Transaction and Direct Bill Commission Downloads (AL3 files), eDocs, Claim Downloads, Alerts, Notifications, and all other InsurTech files.<br/>
          <a href='https://junction.winsurtech.com'><Button variant="contained">Visit for more info</Button></a>

          </p>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
        </>
    )
}


export default OtherSolutions