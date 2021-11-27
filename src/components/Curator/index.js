import React from 'react';
import './curator.scss';
import curatorPhoto from '../../images/laura-warnava.jpg';

function CuratorItem() {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Laura Warnava"></img>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Laura Warnava</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Colocar uma descrição</p>
            </div>
        </div>
    )
}

export default CuratorItem;