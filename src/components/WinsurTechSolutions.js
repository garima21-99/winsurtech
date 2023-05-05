
import OtherSolutions from './OtherSolutions';
import './WinsurTechSolutions.css'
import { useState,useEffect } from 'react';




const ScrollAnimation=()=>{
    var reveals = document.querySelectorAll(".prod_container");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }

    
}

const WinsurTechSolutions=()=>{
    const [data, setData] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", ScrollAnimation);
  }, []);
    return(<>

    <section className="py-5 header">
    <h1 className='text-center'>Our REST API's</h1>

    <div className="container other_solutions py-4">
     


        <div className="row">
            <div className="col-md-3">
                <div className="nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <span className="font-weight-bold  text-uppercase">AL3 Parser API</span></a>

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <span className="font-weight-bold  text-uppercase">AL3 Creator API</span></a>

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <span className="font-weight-bold  text-uppercase">Claims, Messages, and eDocs API</span></a>

                    <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                        <span className="font-weight-bold  text-uppercase">Comprehensive API</span></a>
                    </div>
            </div>


            <div className="col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade shadow rounded bg-white show active p-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h4 className="font-italic mb-4">AL3 Parser API</h4>
                        <p className="font-italic  mb-2">AL3 Parser API makes it very easy to extract different types of Policy data and Direct Bill Commission data from the AL3 file. This API converts Transaction Information,  Insured Information, Basic Policy Information, Coverages, limits, deductibles, options, etc. Using the set of endpoints available in our API, you can extract this information one by one as required. In addition, for Direct Bill commission files you can extract Commission Summary Data and Commission Details Data. This API allows the user to get a response directly as well as from the callback URL provided by the user.</p>
                    </div>
                    
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h4 className="font-italic mb-4">AL3 Creator API</h4>
                        <p className="font-italic  mb-2">AL3 Creator API takes a CSV/JSON file as an input and converts it to an ACORD AL3 file or DAT file. There is one endpoint to generate a CSV/JSON template for different lines of business and another endpoint to convert this template to an AL3 file. All you have to do is fill available values in the template and upload the CSV/JSON back into our endpoints "CSV TO AL3"/"JSON TO AL3" to create the AL3 file. There is no need to change the structure of the template. There are Code list endpoints and Carrier Name endpoints to help you further during the process of preparing the CSV/JSON.</p>
                    </div>
                    
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <h4 className="font-italic mb-4">Claims, Messages, and eDocs API</h4>
                        <p className="font-italic  mb-2">Claims, Messages, and eDocs API makes it possible to extract data from Claim downloads in JSON format where eLabels are JSON keys, and also to extract images and documents embedded inside the Claim files.</p>
                    </div>
                    
                    <div className="tab-pane fade shadow rounded bg-white p-5" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                        <h4 className="font-italic mb-4">Comprehensive API</h4>
                        <p className="font-italic  mb-2">This plan includes all the other plans AL3 Parser Real Time API, AL3 Parser Callback API, AL3 Creator Real Time API and Claims, Messages, and eDocs API.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<OtherSolutions />

    </>)
}

export default WinsurTechSolutions