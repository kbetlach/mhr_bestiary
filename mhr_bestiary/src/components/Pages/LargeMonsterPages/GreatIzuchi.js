import {useState} from "react";
import Table from 'react-bootstrap/Table';

function GreatIzuchi() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const lowRankMaterials = [
        {
            material: "Great Izuchi Hide",
            target: "21%",
            capture: "26%",
            break: "20% (Tail)",
            carves: "43% (Body)",
            dropped: "30%, 60%"
        },
        {
            material: "Great Izuchi Pelt",
            target: "36%",
            capture: "39%",
            break: "30% (Head)",
            carves: "33% (Body)",
            dropped: "20%, 40"
        },
        {
            material: "Great Izuchi Tail",
            target: "5%",
            capture: "15%",
            break: "80% (Tail)",
            carves: "-",
            dropped: "-"
        },
        {
            material: "Screamer Sac",
            target: "26%",
            capture: "20%",
            break: "70% (Head)",
            carves: "24% (Body)",
            dropped: "-"
        }, {
            material: "Monster Bone S",
            target: "12%",
            capture: "-",
            break: "-",
            carves: "-",
            dropped: "-"
        }, {
            material: "Wyvern Tear",
            target: "-",
            capture: "-",
            break: "-",
            carves: "-",
            dropped: "50%"
        },
    ]

    const renderLowRankMaterials = (low, index) => {
        return (
            <tr key={index}>
                <td>{
                    low.material
                }</td>
                <td>{
                    low.target
                }</td>
                <td>{
                    low.capture
                }</td>
                <td>{
                    low.break
                }</td>
                <td>{
                    low.carves
                }</td>
                <td>{
                    low.dropped
                }</td>
            </tr>
        )
    }

    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">

                    <div className="bloc-tabs">
                        <button className={
                                toggleState === 1 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={
                                () => toggleTab(1)
                        }>
                            Low Rank Materials
                        </button>
                        <button className={
                                toggleState === 2 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={
                                () => toggleTab(2)
                        }>
                            High Rank Materials
                        </button>
                        <button className={
                                toggleState === 3 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={
                                () => toggleTab(3)
                        }>
                            Ecology
                        </button>
                        <button className={
                                toggleState === 4 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={
                                () => toggleTab(4)
                        }>
                            Physiology
                        </button>
                        <button className={
                                toggleState === 5 ? "tabs active-tabs" : "tabs"
                            }
                            onClick={
                                () => toggleTab(5)
                        }>
                            Ailments
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div className={
                            toggleState === 1 ? "content  active-content" : "content"
                        }>
                            
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

                                <tbody> {
                                    lowRankMaterials.map(renderLowRankMaterials)
                                } </tbody>

                            </Table>
                        </div>

                        <div className={
                            toggleState === 2 ? "content  active-content" : "content"
                        }>
                            <h2>Content 2</h2>
                        </div>
                        <div className={
                            toggleState === 3 ? "content  active-content" : "content"
                        }>
                            <h2>Content 3</h2>
                        </div>
                        <div className={
                            toggleState === 4 ? "content  active-content" : "content"
                        }>
                            <h2>Content 4</h2>
                        </div>
                        <div className={
                            toggleState === 5 ? "content  active-content" : "content"
                        }>
                            <h2>Content 5</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GreatIzuchi;
