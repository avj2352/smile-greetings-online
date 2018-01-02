import React, {Component} from 'react';
import './demo-card.css';

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
                        FRONT SIDE OF THE CARD
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