import React from 'react';
import Table from 'react-bootstrap/Table'

function GreatIzuchi() {

    const lowRankMaterials = [
        {material: "Great Izuchi Hide", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
        {material: "Great Izuchi Pelt", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
        {material: "Great Izuchi Tail", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
        {material: "Monster Bone S", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
        {material: "Screamer Sac", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
        {material: "Wyvern Tear", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%"},
    ]

    const renderLowRankMaterials = (low, index) => {
        return (
            <tr key={index}>
                <td>{low.material}</td>
                <td>{low.target}</td>
                <td>{low.capture}</td>
                <td>{low.break}</td>
                <td>{low.carves}</td>
                <td>{low.dropped}</td>
            </tr>
        )
    }

    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">
                    <Table responsive>

                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Target Reward</th>
                                <th>Capture Rewards</th>
                                <th>Break Part Rewards</th>
                                <th>Carves</th>
                                <th>Dropped Materials</th>
                            </tr>
                        </thead>

                        <tbody>
                            {lowRankMaterials.map(renderLowRankMaterials)}
                        </tbody>
                        
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default GreatIzuchi;
