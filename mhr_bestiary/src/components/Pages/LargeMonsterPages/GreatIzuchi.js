import {useState} from "react";
import { Bar, Chart } from 'react-chartjs-2';
import Table from 'react-bootstrap/Table';
import Button from '../../Button/Button';
import Header from '../../Header/Header';
import GreatIzuchiImg from '../../../assets/images/LargeMonsters/greatIzuchi.jpg';
import CutImg from '../../../assets/images/ElementsAilmentsDamage/cut.jpg';
import BluntImg from '../../../assets/images/ElementsAilmentsDamage/blunt.jpg';
import AmmoImg from '../../../assets/images/ElementsAilmentsDamage/ammo.jpg';
import FireImg from '../../../assets/images/ElementsAilmentsDamage/fire.jpg';
import WaterImg from '../../../assets/images/ElementsAilmentsDamage/water.jpg';
import ThunderImg from '../../../assets/images/ElementsAilmentsDamage/thunder.jpg';
import IceImg from '../../../assets/images/ElementsAilmentsDamage/ice.jpg';
import DragonImg from '../../../assets/images/ElementsAilmentsDamage/dragon.jpg';
import PoisonImg from '../../../assets/images/ElementsAilmentsDamage/poison.jpg';
import StunImg from '../../../assets/images/ElementsAilmentsDamage/stun.jpg';
import ParalysisImg from '../../../assets/images/ElementsAilmentsDamage/paralysis.jpg';
import SleepImg from '../../../assets/images/ElementsAilmentsDamage/sleep.jpg';
import BlastImg from '../../../assets/images/ElementsAilmentsDamage/blast.jpg';
import ExhaustImg from '../../../assets/images/ElementsAilmentsDamage/blast.jpg';
import FireblightImg from '../../../assets/images/ElementsAilmentsDamage/fireblight.jpg';
import WaterblightImg from '../../../assets/images/ElementsAilmentsDamage/waterblight.jpg';
import ThunderblightImg from '../../../assets/images/ElementsAilmentsDamage/thunderblight.jpg';
import IceblightImg from '../../../assets/images/ElementsAilmentsDamage/iceblight.jpg';
import DragonblightImg from '../../../assets/images/ElementsAilmentsDamage/dragonblight.jpg';

Chart.defaults.plugins.legend = false;

function GreatIzuchi() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const ailments = ["Poison", "Stun", "Paralysis", "Sleep", "Blast", "Exhaust", "Fireblight", "Waterblight", "Thunderblight", "Iceblight"];
    const [selectedAilment, setAilment] = useState("");

    const lowRankMaterials = [
        {material: "Great Izuchi Hide", target: "21%", capture: "26%", break: "20% (Tail)", carves: "43% (Body)", dropped: "30%, 60%"},
        {material: "Great Izuchi Pelt", target: "36%", capture: "39%", break: "30% (Head)", carves: "33% (Body)", dropped: "20%, 40%"},
        {material: "Great Izuchi Tail", target: "5%", capture: "15%", break: "80% (Tail)", carves: "-", dropped: "-"},
        {material: "Screamer Sac", target: "26%", capture: "20%", break: "70% (Head)", carves: "24% (Body)", dropped: "-"},
        {material: "Monster Bone S", target: "12%", capture: "-", break: "-", carves: "-", dropped: "-"}, 
        {material: "Wyvern Tear", target: "-", capture: "-", break: "-", carves: "-", dropped: "50%"},
    ]

    const highRankMaterials = [
        {material: "Great Izuchi Hide +", target: "23%", capture: "27%", break: "20% (Tail)", carves: "44% (Body)", dropped: "29%, 60%"},
        {material: "Great Izuchi Pelt +", target: "39%", capture: "39%", break: "32% (Head)", carves: "35% (Body)", dropped: "20%, 40%"},
        {material: "Great Izuchi Tail +", target: "5%", capture: "15%", break: "80% (Tail)", carves: "-", dropped: "-"},
        {material: "Screamer Sac", target: "18%", capture: "16%", break: "65% (Head)", carves: "20% (Body)", dropped: "-"},
        {material: "Monster Bone +", target: "13%", capture: "-", break: "-", carves: "-", dropped: "-"},
        {material: "Bird Wyvern Gem", target: "2%", capture: "3%", break: "3% (Head)", carves: "1% (Body)", dropped: "1%"},
        {material: "Wyvern Tear", target: "-", capture: "-", break: "-", carves: "-", dropped: "30%"},
        {material: "Large Wyvern Tear", target: "-", capture: "-", break: "-", carves: "-", dropped: "20%"}
    ]

    const physiology = [
        {bodyPart: "Head", cut: "80", blunt: "80", ammo: "75", fire: "10", water: "20", thunder: "25", ice: "10", dragon: "5"},
        {bodyPart: "Torso", cut: "45", blunt: "45", ammo: "40", fire: "10", water: "10", thunder: "15", ice: "10", dragon: "5"},
        {bodyPart: "Foreleg", cut: "50", blunt: "50", ammo: "55", fire: "10", water: "10", thunder: "15", ice: "10", dragon: "0"},
        {bodyPart: "Tail", cut: "55", blunt: "50", ammo: "35", fire: "10", water: "15", thunder: "20", ice: "10", dragon: "5"},
        {bodyPart: "Tail Tip", cut: "75", blunt: "80", ammo: "75", fire: "10", water: "20", thunder: "25", ice: "15", dragon: "10"},
    ]

    const renderPhysiology = (body, index) => {
        return (
            <tr key={index}>
                <td>{body.bodyPart}</td>
                <td>{body.cut}</td>
                <td>{body.blunt}</td>
                <td>{body.ammo}</td>
                <td>{body.fire}</td>
                <td>{body.water}</td>
                <td>{body.thunder}</td>
                <td>{body.ice}</td>
                <td>{body.dragon}</td>
            </tr>
        )
    }

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

    const [poisonData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Total Damage'],
        datasets: [
            {data: [3, 3, 3, 2, 3],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [stunData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [3, 3, 3, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [paralysisData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [3, 3, 3, 2, 3],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [sleepData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [3, 3, 3, 2, 3],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [blastData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Damage'],
        datasets: [
            {data: [3, 3, 2, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [exhaustData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Stamina Loss'],
        datasets: [
            {data: [3, 4, 3, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [fireBlightData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Total Damage'],
        datasets: [
            {data: [2, 2, 2, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [waterBlightData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [2, 2, 2, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [thunderBlightData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [2, 2, 2, 2, 3],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });

    const [iceBlightData] = useState({
        labels: ['Initial Resistance', 'Next Resistance Threshold', 'Maximum Resistance', 'Natural Buildup Degradation', 'Effect Duration'],
        datasets: [
            {data: [2, 2, 2, 2, 2],
                backgroundColor: ['rgba(192, 57, 43, 0.5)', 'rgba(233, 212, 96, 0.5)', 'rgba(42, 187, 155, 0.5)', 'rgba(25, 181, 254, 0.5)', 'rgba(191, 85, 236, 0.5)']
            }
        ]
    });
    
    const [barOptions] = useState({
        options: {
            maintainAspectRatio: true,
            indexAxis: 'y',
            scales: {
                x: {
                    min: 0,
                    max: 4,
                    ticks: {
                        color: 'white',
                        count: 5
                      },
                },
                y: {
                    ticks: {
                        color: 'white',
                    }
                },
            }
        }
    });

    return (
        <div>
            <Header />

            <div className="container w3-container w3-center w3-animate-opacity">
                <h1 style={{color: 'white'}}>Great Izuchi</h1>
                    <div className="jumbotron">
                        <div className="row">

                            <div className="col-md-3">
                                <img src={GreatIzuchiImg} style={{height: "400px", width: "250px"}}alt="great izuchi in game"></img>
                                <p>Trinity of Terror</p>
                                <p>Type: Bird Wyvern</p>
                                <p>Threat Level: 1/10</p>
                            </div>

                            <div className="col-md-9">

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
        
                                    <div className= {toggleState === 3 ? "content  active-content" : "content"}>
                                        <h3>Characteristics</h3>
                                            <p>The alpha Izuchi of its pack, identified by its larger build, upended white fur and scythe-like tail.
                                                A Great Izuchi forms a herd of many smaller Izuchi and selects patrols.
                                                Once it spots prey or senses danger, the Great Izuchi issues commands to their fellow Izuchi, and coordinates their movements.
                                                Take care that you don't get overwhelmed.
                                            </p>
                                        <h3>Known Habitats</h3>
                                            <div className="row">
                                                <div className="col-md-6">Shrine Ruins</div>
                                                <div className="col-md-6">Frost Islands</div>
                                            </div>
                                    </div>

                                    <div className= {toggleState === 4 ? "content  active-content" : "content"}>

                                    <Table responsive>
                                         <thead>
                                            <tr>
                                                <th></th>
                                                <th><img class="damageIcons" src={CutImg} alt="cut icon"></img></th>
                                                <th><img class="damageIcons" src={BluntImg} alt="blunt icon"></img></th>
                                                <th><img class="damageIcons" src={AmmoImg} alt="ammo icon"></img></th>
                                                <th><img class="damageIcons" src={FireImg} alt="fire icon"></img></th>
                                                <th><img class="damageIcons" src={WaterImg} alt="water icon"></img></th>
                                                <th><img class="damageIcons" src={ThunderImg} alt="thunder icon"></img></th>
                                                <th><img class="damageIcons" src={IceImg} alt="ice icon"></img></th>
                                                <th><img class="damageIcons" src={DragonImg} alt="dragon icon"></img></th>
                                            </tr>
                                         </thead>

                                        <tbody> {
                                            physiology.map(renderPhysiology)} 
                                        </tbody>

                                    </Table>

                                    </div>

                                    <div className= {toggleState === 5 ? "content  active-content" : "content"}>
                                        <div className="row">
                                        <h2>Ailment Effectiveness</h2>

                                            <div className="col-md-4">
                                                {ailments.map(ailment => (
                                                    <ul
                                                        cursor="pointer"
                                                        key={ailment}
                                                        onClick={() => setAilment(ailment)}
                                                        style={{textAlign: 'left'}}
                                                    > 
                                                        {ailment}                    
                                                    </ul>
                                                ))}
                                            </div>

                                            <div className="col-md-8">
                                                <p>{selectedAilment}</p>
                                            
                                            {selectedAilment === "Poison" && (
                                                <Bar
                                                    data={poisonData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                            {selectedAilment === "Stun" && (
                                                <Bar
                                                    data={stunData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Paralysis" && (
                                                <Bar
                                                    data={paralysisData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Sleep" && (
                                                <Bar
                                                    data={sleepData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Blast" && (
                                                <Bar
                                                    data={blastData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Exhaust" && (
                                                <Bar
                                                    data={exhaustData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Fireblight" && (
                                                <Bar
                                                    data={fireBlightData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Waterblight" && (
                                                <Bar
                                                    data={waterBlightData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Thunderblight" && (
                                                <Bar
                                                    data={thunderBlightData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                              {selectedAilment === "Iceblight" && (
                                                <Bar
                                                    data={iceBlightData}
                                                    options={barOptions.options}
                                                />
                                            )}
                                        
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GreatIzuchi;
