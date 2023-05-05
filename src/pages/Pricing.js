import { useState ,useEffect} from "react";

const PricingTabs=(e)=>{
    e.preventDefault();  
    this.tab('show');
}

const PricingData=[{
    'plan_name':'PRO',
    'price':'199',
    'transactions':'5000'

},
{
    'plan_name':'ULTRA',
    'price':'369',
    'transactions':'15000'

    },
    {
    'plan_name':'MEGA',
    'price':'699',
    'transactions':'45000'

    }
]


const Claims=[{
    'plan_name':'PRO',
    'price':'90',
    'transactions':'2000'

},
{
    'plan_name':'ULTRA',
    'price':'160',
    'transactions':'5000'

    },
    {
    'plan_name':'MEGA',
    'price':'300',
    'transactions':'15000'

    }
]

const Comprehensive=[{
    'plan_name':'PRO',
    'price':'299',
    'transactions':'7500'

},
{
    'plan_name':'ULTRA',
    'price':'499',
    'transactions':'20000'

    },
    {
    'plan_name':'MEGA',
    'price':'899',
    'transactions':'60000'

    }
]


const parser=()=>{
    document.querySelector('#home1').style.display = 'block';  
    document.querySelector('#profile1').style.display ='none';
    document.querySelector('#messages1').style.display = 'none'; 
    document.querySelector('#comprehensive1').style.display = 'none'; 


}

const creator=()=>{
    document.querySelector('#profile1').style.display = 'block';
    document.querySelector('#home1').style.display = 'none';  
    document.querySelector('#messages1').style.display = 'none'; 
    document.querySelector('#comprehensive1').style.display = 'none'; 
 

}
const claims=()=>{
    document.querySelector('#messages1').style.display = 'block'; 
    document.querySelector('#profile1').style.display = 'none';
    document.querySelector('#home1').style.display = 'none'; 
    document.querySelector('#comprehensive1').style.display = 'none'; 


}
const comprehesive=()=>{
    document.querySelector('#comprehensive1').style.display = 'block'; 
    document.querySelector('#profile1').style.display = 'none';
    document.querySelector('#home1').style.display = 'none';  
    document.querySelector('#messages1').style.display = 'none'; 

}

const Pricing=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        var a=document.querySelector('#home1')
        var b=document.querySelector('#profile1')  
        var c=document.querySelector('#messages1')
        var d=document.querySelector('#comprehensive1')
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';



       
          
      });
    return(
        <>
        <div className=" mt-5">
            <div className="col-md-12 ml-auto col-xl-12 mr-auto">
            < div className="pricing_cards" >
                    <div className="col text-center my-4">
                        <h2 className="">Pricing</h2>
                    </div>
                </div>
           
            <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home1" onClick={parser} role="tab">
                         Al3 Parser API
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile1" onClick={creator} role="tab">
                        Al3 Creator API
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages1" onClick={claims} role="tab">
                       Claims, Messages, and eDocs API
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#comprehensive1" onClick={comprehesive} role="tab">
                      Comprehensive API
                    </a>
                    </li>
                </ul>
            <div className="tab-pane active" id="home1" role="tabpanel">
            <div className="card pricing mb-4">
                <div className="card-header">
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home2" role="tab">
                        Monthy
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile2" role="tab">
                     Half-Yearly
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages2" role="tab">
                        Yearly
                    </a>
                    </li>
                    
                </ul>
                </div>
                <div className="card-body">
                <div id="pricing">
            <div className=" py-4">
                
                <div className="tab-content text-center">
                    <div className="tab-pane active " id="home2" role="tabpanel">
                        <div className="row">
                        {PricingData.map((item,idx)=>{
                            return(<>
                    <div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{item.price}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{item.transactions} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                
               
       </div>
                    <div className="tab-pane" id="profile2" role="tabpanel">
                   <div className="row">
                    {PricingData.map((item,idx)=>{
                            return(<>
                    <div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*6}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*6} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>
                    </div>

                  


                            </>)
                        })}
                        </div>
                    </div>
                    <div className="tab-pane" id="messages2" role="tabpanel">
                    <div className="row">

                    {PricingData.map((item,idx)=>{
                            return(<>
                    <div className="col-4 pricing_cards"  >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*12}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*12} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>




            <div className="tab-pane " id="profile1" role="tabpanel">
            <div className="card pricing mb-4">
                <div className="card-header">
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home3" role="tab">
                     Monthy
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile3" role="tab">
                       Half-Yearly
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages3" role="tab">
                     Yearly
                    </a>
                    </li>
                    
                </ul>
                </div>
                <div className="card-body">
                <div id="pricing">
            <div className=" py-4">
                
                <div className="tab-content text-center">
                    <div className="tab-pane active" id="home3" role="tabpanel">
                    <div className="row">

                        {PricingData.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{item.price}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{item.transactions} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                
               
       </div>
                    <div className="tab-pane" id="profile3" role="tabpanel">
                    <div className="row">

                    {PricingData.map((item,idx)=>{
                            return(<>
                             < div className=" col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*6}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*6} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                    </div>
                    </div>
                    <div className="tab-pane" id="messages3" role="tabpanel">
                    <div className="row">

                    {PricingData.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*12}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*12} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>










            <div className="tab-pane " id="messages1" role="tabpanel">
            <div className="card pricing mb-4">
                <div className="card-header">
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home4" role="tab">
                      Monthy
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile4" role="tab">
                        Half-Yearly
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages4" role="tab">
                        Yearly
                    </a>
                    </li>
                    
                </ul>
                </div>
                <div className="card-body">
                <div id="pricing">
            <div className=" py-4">
                
                <div className="tab-content text-center">
                    <div className="tab-pane active" id="home4" role="tabpanel">
                    <div className="row">
                        {Claims.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{item.price}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{item.transactions} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                
               
       </div>
                    <div className="tab-pane" id="profile4" role="tabpanel">
                    <div className="row">

                    {Claims.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*6}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*6} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                    </div>
                    <div className="tab-pane" id="messages4" role="tabpanel">
                    <div className="row">

                    {Claims.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*12}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*12} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                    </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>










            <div className="tab-pane " id="comprehensive1" role="tabpanel">
            <div className="card pricing mb-4">
                <div className="card-header">
                <ul className="nav nav-tabs justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home5" role="tab">
                        Monthy
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile5" role="tab">
                      Half-Yearly
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#messages5" role="tab">
                      Yearly
                    </a>
                    </li>
                    
                </ul>
                </div>
                <div className="card-body">
                <div id="pricing">
            <div className=" py-4">
                
                <div className="tab-content text-center">
                    <div className="tab-pane active" id="home5" role="tabpanel">
                    <div className="row">

                        {Comprehensive.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{item.price}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{item.transactions} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                
               
       </div>
                    <div className="tab-pane" id="profile5" role="tabpanel">
                    <div className="row">

                    {Comprehensive.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*6}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*6} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                    </div>

                  


                </div>
                            </>)
                        })}
                        </div>
                    </div>
                    <div className="tab-pane" id="messages5" role="tabpanel">
                    <div className="row">

                    {Comprehensive.map((item,idx)=>{
                            return(<>
                             < div className="col-4 pricing_cards" >
                        <div className="card border-success pricing_card_col text-center">
                            <h4 className="card-header text-white bg-success py-4">{item.plan_name}</h4>
                            <div className="card-body">
                                <h5 className="card-title display-4"><span className="currency">$</span>{parseInt(item.price)*12}<span className="period"> </span></h5>
                                <ul className="list-group list-group-flush lead">
                                    <li className="list-group-item">{parseInt(item.transactions)*12} Transactions</li>

                                </ul>
                                <button type="button" className="btn btn-success mt-4">Buy Now</button>
                            </div>
                          </div>

                  


                </div>
                            </>)
                        })}
                    </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>



            </div>
            </div>
       
        </>
    )
}


export default Pricing