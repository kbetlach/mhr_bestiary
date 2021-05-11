import {useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from '../../Button/Button';

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
            dropped: "20%, 40%"
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

    const highRankMaterials = [
        {
            material: "Great Izuchi Hide +",
            target: "23%",
            capture: "27%",
            break: "20% (Tail)",
            carves: "44% (Body)",
            dropped: "29%, 60%"
        },
        {
            material: "Great Izuchi Pelt +",
            target: "39%",
            capture: "39%",
            break: "32% (Head)",
            carves: "35% (Body)",
            dropped: "20%, 40%"
        },
        {
            material: "Great Izuchi Tail +",
            target: "5%",
            capture: "15%",
            break: "80% (Tail)",
            carves: "-",
            dropped: "-"
        },
        {
            material: "Screamer Sac",
            target: "18%",
            capture: "16%",
            break: "65% (Head)",
            carves: "20% (Body)",
            dropped: "-"
        }, {
            material: "Monster Bone +",
            target: "13%",
            capture: "-",
            break: "-",
            carves: "-",
            dropped: "-"
        }, {
            material: "Bird Wyvern Gem",
            target: "2%",
            capture: "3%",
            break: "3% (Head)",
            carves: "1% (Body)",
            dropped: "1%"
        }, {
            material: "Wyvern Tear",
            target: "-",
            capture: "-",
            break: "-",
            carves: "-",
            dropped: "30%"
        }, {
            material: "Large Wyvern Tear",
            target: "-",
            capture: "-",
            break: "-",
            carves: "-",
            dropped: "20%"
        }
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

    const renderHighRankMaterials = (high, index) => {
        return (
            <tr key={index}>
                <td>{high.material}</td>
                <td>{high.target}</td>
                <td>{high.capture}</td>
                <td>{high.break}</td>
                <td>{high.carves}</td>
                <td>{high.dropped}</td>
            </tr>
        )
    }

    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <h1>Great Izuchi</h1>
                <div className="jumbotron">

                    <div className="bloc-tabs">
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                            Materials
                        </button>

                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                            Ecology
                        </button>

                        <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                            Physiology
                        </button>

                        <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                            Ailments
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"}>

                        <Button onClick={() => toggleTab(2)}>
                            High Rank
                        </Button>
                            
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

                        <div className={toggleState === 2 ? "content  active-content" : "content"}>

                            <Button onClick={() => toggleTab(1)}>
                                Low Rank
                            </Button>

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
                                highRankMaterials.map(renderHighRankMaterials)} 
                            </tbody>

                        </Table>

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
