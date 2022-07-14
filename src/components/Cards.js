import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../style/card.css'

export default function Cards(props) {
    if(props.title == "What Happens"){
        var wh = <Card.Text className="card-text">Sometimes we need single-use products. Unfortunately, the vast majority are made from petroleum-based plastics</Card.Text>;
    }else if(props.title == 'Why Its a Problem'){
        var wh = <Card.Text className="card-text">These petro plastics are thrown away and take 500-1000 years to break down into microplastics harming our environment</Card.Text>;
    }else if(props.title == "Our Solution"){
        var wh = <Card.Text className="card-text">At Alpha, all our products use a new bioplastic (PHA) that fully biodegrades in home composts, landfills, or oceans in under 1 year</Card.Text>;
    }



    return (
        // <div className="d-flex justify-content-around">
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={props.url} />
        //         <Card.Body>
        //         <Card.Title>{props.title}</Card.Title>
        //         {wh}
        //         </Card.Body>
        //     </Card>

        // </div>
        <div className="card-group">
            <div className="card">
                <img className="card-img-top" src={props.url} alt="Card image cap"></img>
                <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {wh}
                </div>
            </div>
        </div>
  )
}
