import React, {Component} from 'react';
import './demo-card.css';
import './demo-card-rotation.css';
import couplePhoto from '../../assets/img/lovely-couple.PNG';

class DemoCard extends Component {
    render() {
        return (
            <div className="demo-card">
                {/* Card CSS here */}
                <div className="card-container">
                    {/* Card Component */}
                    <div className="card">
                    {/* Front side of the card */}
                    <div className="card__side card__side--front">
                        <div className="top-section">
                            <h1>Happy Vacations</h1>
                        </div>
                        <div className="photo-section">
                            <img src={couplePhoto} alt="couple-photo"/>
                        </div>
                        <div className="middle-section">
                            <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum sequi sed? Ipsa quo, et tempora vel hic accusantium, nesciunt totam voluptatem dolore sequi vitae quas consectetur aspernatur, animi odit! "</p>                            
                        </div>
                        <div className="bottom-section">
                            <p>From Pramod &amp; Shwetha <a href="#">turnAround</a></p>                            
                        </div>
                    </div>
                    {/* Back side of the card */}
                    <div className="card__side card__side--back card__side--back-1">
                        BACK SIDE OF THE CARD
                    </div>
                </div>
                </div>
                {/* Card CSS ends here */}
            </div>
        );
    }//end:render
}//end:DemoCard

export default DemoCard;