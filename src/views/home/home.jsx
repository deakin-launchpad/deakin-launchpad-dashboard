import React, { Component } from 'react';
import logo from 'images/deakin-logo.svg'
import Header from 'components/header.jsx'
import Card from 'components/card.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If isLoggedState is false Modal will not pop-up
      // Otherwise Modal OnClick: true state
      isLoggedIn: true,
      modalStatus: false,
      cardData: [  
        {  
          "title":"Card 1",
          "description":"Commodo class hac montes hendrerit blandit ut. Morbi. Dolor nisl. Sociosqu litora tristique. Ridiculus conubia mollis congue penatibus massa orci."
        },
        {  
          "title":"Card 2",
          "description":"Nunc quam risus pharetra odio nonummy Platea ornare. Eu ligula id donec diam ultricies. Platea aptent. Consectetuer dolor fusce lacus."
        },
        {  
          "title":"Card 3",
          "description":"Lacinia fringilla consectetuer sed. Ad suspendisse est. Mus. Magnis leo elit varius facilisi lacus et ad per. Enim tristique ridiculus."
        },
        {  
          "title":"Card 4",
          "description":"Rutrum, est. Nam. Sociosqu justo, senectus nam. Felis et enim diam sagittis congue habitasse. Suspendisse class ullamcorper. Facilisi, class vulputate."
        }
    ],
      modalData: [
        {
          "title": "Modal 1",
          "description": "Sed posuere eget erat rutrum primis sollicitudin tristique consectetuer litora laoreet curae; habitant taciti tempor a urna convallis nulla. Arcu mauris ultricies magnis, sagittis ullamcorper magna. Venenatis metus nostra turpis metus mauris sit. Leo. Mauris et nec netus hac, sit litora quam, hymenaeos et, quisque. Nam feugiat convallis. Adipiscing bibendum."
        },
        {
          "title": "Modal 2",
          "description": "Purus Auctor hymenaeos aptent ante. Senectus vel blandit Hac. Quis eu tellus nascetur neque dis ipsum congue platea elementum sed ac commodo consectetuer lectus purus condimentum dictum vitae. Dictumst aliquet eleifend. Integer et, tempor pede nam interdum primis auctor ultrices ante mauris felis cubilia nonummy at in. Facilisis viverra parturient."
        },
        {
          "title": "Modal 3",
          "description": "Habitasse iaculis. Fusce primis proin curabitur natoque cum accumsan felis. Hendrerit lorem adipiscing dignissim. Vivamus aliquam varius auctor sociis. Suspendisse amet adipiscing ultrices quisque fermentum sit. Rhoncus. Rutrum sagittis lorem. Pharetra Potenti nascetur quam netus. Fames adipiscing enim per erat porttitor etiam blandit consectetuer feugiat a. Magnis dolor. Dis netus."
        },
        {
          "title": "Modal 4",
          "description": "Ridiculus posuere potenti ante commodo nec blandit iaculis. Habitant ante sociis curabitur praesent. Facilisi placerat felis phasellus sociosqu aptent lorem aptent inceptos, praesent purus. Ultrices. Quisque ridiculus commodo ut. Pede eu velit. Ante natoque proin eget congue sociis dis, volutpat conubia, potenti venenatis hendrerit. Malesuada vel conubia natoque nisl nullam."
        },
      ],
    };
  }

  componentDidMount() {
    if(this.state.isLoggedIn) {
      this.setState({ modalStatus: true}, () => {
          console.log(this.state.modalStatus);
      }) 
    }
  }


  render() {
    const cardCount = this.state.cardData.length;
    let card = [];
    for(let i=0; i < cardCount; i++) {
      card.push(<Card key={i.toString()} id={i+1} modalStatus={this.state.modalStatus} data_card={this.state.cardData[i]} data_modal={this.state.modalData[i]}/>)      
    }
    return (
      <div className="Home">
         <Header />
             <header className="App-header">
        </header>
        <div className="cards">
          {card}
        </div>
      </div>
    );
  }
}

export default Home;
