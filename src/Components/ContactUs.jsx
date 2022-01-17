import React from "react";
import bookImg from '../images/book.jpg'

let ContactUs = () => {
    return (
        <div className="container">
            <div className="p-3 my-1 bg-light rounded-3">                
                <div className="row">
                    <div className="col-md-6">
                    <img src={bookImg} className="img-fluid" alt="library"/>
                    </div>
                    <div className="col-md-6">
                        <p>Books have the power to transport us to new worlds and different times, but they can also take us back to the important moments in our own lives.
                        </p>
                        <h5>Contact Us :</h5>
                        <p><strong>MAIN LIBRARY</strong><br/>1 George Frederick Plaza<br/>
                        Woodbridge,<br/> NJ 07095-2598</p>
                        <p><strong>Phone:</strong> 732-634-4450 </p>
                        <p><strong>Fax:</strong> 732-726-7080</p>
                        <h5>Library Hours :</h5>
                        <p><strong>Mon</strong> 9:00 a.m. - 9:00 p.m. <br/>
                        <strong>Tue</strong> 9:00 a.m. - 9:00 p.m. <br/>
                        <strong>Wed</strong> 9:00 a.m. - 9:00 p.m. <br/>
                        <strong>Thu</strong> 9:00 a.m. - 9:00 p.m. <br/>
                        <strong>Fri</strong> 9:00 a.m. - 9:00 p.m. <br/>
                        <strong>Sat</strong> 9:00 a.m. - 5:00 p.m. <br/>
                        <strong>Sun</strong> 9:00 a.m. - 2:00 p.m.<br/></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;