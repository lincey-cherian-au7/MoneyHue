import React from 'react';
import {Card} from 'react-bootstrap'

function FooterCard() {
    return (
        <div>
             <Card >
                    <Card.Footer style={{backgroundColor:"#5F021F",color:"white", fontSize:"small",textAlign:"center"}}>CopyRight @2020 MoneyHue Private Limited.</Card.Footer>
             </Card>
            
        </div>
    )
}

export default FooterCard
