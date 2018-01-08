import React, {Component} from 'react';
import classnames from 'classnames';
import './demo-card.css';
import './demo-card-rotation.css';
import couplePhoto from '../../assets/img/lovely-couple.PNG';

class DemoCard extends Component { 

    constructor(props,context){
        super(props,context);
        this.state = {
            isFront:true
        };//end:state
        this.flipCard = this.flipCard.bind(this);
    }//end:constructor

    flipCard(){
        //using prevState to remove any race conditions
        this.setState((prevState)=>{return {isFront:!prevState.isFront}});
    }//end:flipCard

    render() {
        const {isFront} = this.state;
        let cardRotateClass = classnames({
            'card':true,
            'card--rotate':!isFront,
        });//end:classnames
        return (
            <div className="demo-card">
                {/* Card CSS here */}
                <div className="card-container">
                    {/* Card Component */}
                    <div className={cardRotateClass}>
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
                        <div className="buttons-group-section">
                            <button>Music</button>
                            <button>Com</button>
                            <button onClick={this.flipCard}>Turn</button>
                        </div>
                        <div className="bottom-section">
                            <p>From Pramod &amp; Shwetha</p>                            
                        </div>
                    </div>
                    {/* Back side of the card */}
                    <div className="card__side card__side--back card__side--back-1">
                        <div className="chat-section">
                            Chats will come here !!
                        </div>
                        <div className="buttons-group-section">
                            <button>Music</button>
                            <button>Com</button>
                            <button onClick={this.flipCard}>Turn</button>
                        </div>
                        <div className="bottom-section">
                            <p>From Pramod &amp; Shwetha</p>                            
                        </div>
                    </div>
                </div>
                </div>
                {/* Card CSS ends here */}
            </div>
        );
    }//end:render

}//end:DemoCard

export default DemoCard;