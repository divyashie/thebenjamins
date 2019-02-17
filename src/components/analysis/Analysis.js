import React, { Component } from 'react';
import "./Analysis.css";

class Analysis extends Component {
    render() {
        return (
            <div>
            <div class="analysis-box" >
                <div className="uni-name"> UChicago </div>
                <div className="total"> Total Out Of Pocket: $10,000 surplus </div>
                <div className="expenses">
                    <div className="header"> Expenses</div>
                    <div className="item">  TUITION: $57,000 </div>
                    <div className="item">  ROOM AND BOARD: $16,350 </div>
                </div>
                <div className="funding">
                    <div className="header">Funding</div>
                    <div className="item">LOANS: $0 </div>
                    <div className="item">GRANTS: $10,000 </div>
                    <div className="item">SCHOLARSHIPS: $73,350 </div>
                </div>            
            </div>
            <div class="analysis-box" >
                <div className="uni-name"> Northwestern </div>
                <div className="total"> Total Out Of Pocket: $26,865 </div>
                <div className="expenses">
                    <div className="header"> Expenses</div>
                        <div className="item">  TUITION: $52,239 </div>
                        <div className="item">  ROOM AND BOARD: $16,626 </div>
                </div>
                <div className="funding">
                    <div className="header">Funding</div>
                    <div className="item">LOANS: $10,000 </div>
                    <div className="item">GRANTS: $22,000 </div>
                    <div className="item">SCHOLARSHIPS: $10,000 </div>
                </div>
            </div>
            <div class="analysis-box" >
                    <div className="uni-name"> Illinois Institute of Technology </div>
                <div className="total"> Total Out Of Pocket: $1,912 </div>
                <div className="expenses">
                    <div className="header"> Expenses</div>
                        <div className="item">  TUITION: $44,150 </div>
                        <div className="item">  ROOM AND BOARD: $12,762 </div>
                </div>
                <div className="funding">
                    <div className="header">Funding</div>
                    <div className="item">LOANS: $10,000 </div>
                    <div className="item">GRANTS: $15,000 </div>
                    <div className="item">SCHOLARSHIPS: $30,000 </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Analysis;