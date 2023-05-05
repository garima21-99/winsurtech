import imag from '../images/win pic.jpg'
import './HomePage.css'
import WinsurTechSolutions from '../components/WinsurTechSolutions'

const HomePage=()=>{
    
    return(
    <>
       <section id="home">
        <div className="home_page ">
        <div className="row">
          
            <div className="home_txt col-5 ">
                <div className='winsurtech_description ms-2'>
                <h1 className='winsurtech_heading'>WinsurTech Welcomes You!</h1>
                <div className="home_label ">
                    <p className='home_text_'>WinsurTech is ACORD Leadership Award winner (2022) because of our work on ACORD standards like AL3, ACORD Forms and XML. If you need help with AL3, Claim & EDocs Downloads, AL3 Parsing, Creation & Distribution we are here to help. We also have solutions for generating COI (ACORD 25), prefilling ACORD forms, and data extraction (OCR). If you are a Carrier, MGA, or Agency, you will like our solutions & services.</p>
                </div>
                <button><a href="/contactus">Contact Us</a><i className='bx bx-right-arrow-alt'></i></button>
                </div>
            </div>
           
            <div className="home_img col-7 mt-2">
                <img src={imag} alt="img " />
            </div>
        </div>
        </div>
    </section>
    <WinsurTechSolutions />

    </>)
}


export default HomePage