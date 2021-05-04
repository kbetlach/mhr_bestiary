import React from 'react';
import {Link} from "react-router-dom";
import GreatIzuchiImg from '../../assets/images/LargeMonsters/greatIzuchi.jpg';
import AknosomImg from '../../assets/images/LargeMonsters/aknosom.jpg';
import AlmudronImg from '../../assets/images/LargeMonsters/almudron.jpg';
import AnjanathImg from '../../assets/images/LargeMonsters/anjanath.jpg';
import ArzurosImg from '../../assets/images/LargeMonsters/arzuros.jpg';
import BariothImg from '../../assets/images/LargeMonsters/barioth.jpg';
import BarrothImg from '../../assets/images/LargeMonsters/barroth.jpg';
import BasariosImg from '../../assets/images/LargeMonsters/basarios.jpg';
import BishatenImg from '../../assets/images/LargeMonsters/bishaten.jpg';
import DiablosImg from '../../assets/images/LargeMonsters/diablos.jpg';
import GossHaragImg from '../../assets/images/LargeMonsters/gossHarag.jpg';
import GreatBaggiImg from '../../assets/images/LargeMonsters/greatBaggi.jpg';
import GreatWroggiImg from '../../assets/images/LargeMonsters/greatWroggi.jpg';
import JyuratodusImg from '../../assets/images/LargeMonsters/jyuratodus.jpg';
import KhezuImg from '../../assets/images/LargeMonsters/khezu.jpg';
import KuluYaKuImg from '../../assets/images/LargeMonsters/kuluYaKu.jpg';
import LagombiImg from '../../assets/images/LargeMonsters/lagombi.jpg';
import MagnamaloImg from '../../assets/images/LargeMonsters/magnamalo.jpg';
import MizutsuneImg from '../../assets/images/LargeMonsters/mizutsune.jpg';
import NargacugaImg from '../../assets/images/LargeMonsters/nargacuga.jpg';
import PukeiPukeiImg from '../../assets/images/LargeMonsters/pukeiPukei.jpg';
import RajangImg from '../../assets/images/LargeMonsters/rajang.jpg';
import RaknaKadakiImg from '../../assets/images/LargeMonsters/raknaKadaki.jpg';
import RathalosImg from '../../assets/images/LargeMonsters/rathalos.jpg';
import RathianImg from '../../assets/images/LargeMonsters/rathian.jpg';
import RoyalLudrothImg from '../../assets/images/LargeMonsters/royalLudroth.jpg';
import SomnacanthImg from '../../assets/images/LargeMonsters/somnacanth.jpg';
import TetranadonImg from '../../assets/images/LargeMonsters/tetranadon.jpg';
import ThunderSerpentNarwaImg from '../../assets/images/LargeMonsters/thunderSerpentNarwa.jpg';
import TigrexImg from '../../assets/images/LargeMonsters/tigrex.jpg';
import TobiKadachiImg from '../../assets/images/LargeMonsters/tobiKadachi.jpg';
import VolvidonImg from '../../assets/images/LargeMonsters/volvidon.jpg';
import WindSerpentIbushiImg from '../../assets/images/LargeMonsters/windSerpentIbushi.jpg';
import ZinogreImg from '../../assets/images/LargeMonsters/zinogre.jpg';
import "./pages.css";

function Menu() {
    return (
        <div>
            <div className="container w3-container w3-center w3-animate-opacity">
                <div className="jumbotron">

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/greatizuchi' className={window.location.pathname === '/greatizuchi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GreatIzuchiImg} alt="great izuchi icon"></img>
                                    <p className="img__description">Great Izuchi</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/lagombi' className={window.location.pathname === '/lagombi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={LagombiImg} alt="lagombi icon"></img>
                                    <p className="img__description">Lagombi</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/greatbaggi' className={window.location.pathname === '/greatbaggi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GreatBaggiImg} alt="great baggi icon"></img>
                                    <p className="img__description">Great Baggi</p>
                                </div>
                            </Link>                  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                             <Link to='/arzuros' className={window.location.pathname === '/arzuros'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ArzurosImg} alt="arzuros icon"></img>
                                    <p className="img__description">Arzuros</p>
                                </div>
                            </Link>                        
                        </div>
                        <div className="col-md-4">
                            <Link to='/aknosom' className={window.location.pathname === '/aknosom'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AknosomImg} alt="aknosom icon"></img>
                                    <p className="img__description">Aknosom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/khezu' className={window.location.pathname === '/khezu'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={KhezuImg} alt="khezu icon"></img>
                                    <p className="img__description">Khezu</p>
                                </div>
                            </Link>                             
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/royalludroth' className={window.location.pathname === '/royalludroth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RoyalLudrothImg} alt="royal ludroth icon"></img>
                                    <p className="img__description">Royal Ludroth</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/greatwroggi' className={window.location.pathname === '/greatwroggi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GreatWroggiImg} alt="great wroggi icon"></img>
                                    <p className="img__description">Great Wroggi</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/barroth' className={window.location.pathname === '/barroth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BarrothImg} alt="barroth icon"></img>
                                    <p className="img__description">Barroth</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/kuluyaku' className={window.location.pathname === '/kuluyaku'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={KuluYaKuImg} alt="kulu-ya-ku icon"></img>
                                    <p className="img__description">Kulu-Ya-Ku</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tetranadon' className={window.location.pathname === '/tetranadon'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TetranadonImg} alt="tetranadon icon"></img>
                                    <p className="img__description">Tetranadon</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/pukeipukei' className={window.location.pathname === '/pukeipukei'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={PukeiPukeiImg} alt="pukei-pukei icon"></img>
                                    <p className="img__description">Pukei-Pukei</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/basarios' className={window.location.pathname === '/basarios'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BasariosImg} alt="basarios icon"></img>
                                    <p className="img__description">Basarios</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/volvidon' className={window.location.pathname === '/volvidon'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={VolvidonImg} alt="volvidon icon"></img>
                                    <p className="img__description">Volvidon</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tobikadachi' className={window.location.pathname === '/tobikadachi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TobiKadachiImg} alt="tobi-kadachi icon"></img>
                                    <p className="img__description">Tobi-Kadachi</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/rathian' className={window.location.pathname === '/rathian'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RathianImg} alt="rathian icon"></img>
                                    <p className="img__description">Rathian</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/barioth' className={window.location.pathname === '/barioth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BariothImg} alt="barioth icon"></img>
                                    <p className="img__description">Barioth</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/somnacanth' className={window.location.pathname === '/somnacanth'}>                            
                                <div className="img__wrap">
                                    <img className="img__img" src={SomnacanthImg} alt="somnacanth icon"></img>
                                    <p className="img__description">Somnacanth</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/magnamalo' className={window.location.pathname === '/magnamalo'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={MagnamaloImg} alt="magnamalo icon"></img>
                                    <p className="img__description">Magnamalo</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/anjanath' className={window.location.pathname === '/anjanath'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AnjanathImg} alt="anjanath icon"></img>
                                    <p className="img__description">Anjanath</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/rathalos' className={window.location.pathname === '/rathalos'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RathalosImg} alt="rathalos icon"></img>
                                    <p className="img__description">Rathalos</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/mizutsune' className={window.location.pathname === '/mizutsune'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={MizutsuneImg} alt="mizutsune icon"></img>
                                    <p className="img__description">Mizutsune</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/zinogre' className={window.location.pathname === '/zinogre'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ZinogreImg} alt="zinogre icon"></img>
                                    <p className="img__description">Zinogre</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/nargacuga' className={window.location.pathname === '/nargacuga'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={NargacugaImg} alt="nargacuga icon"></img>
                                    <p className="img__description">Nargacuga</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/bishaten' className={window.location.pathname === '/bishten'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BishatenImg} alt="bishaten icon"></img>
                                    <p className="img__description">Bishaten</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/almudron' className={window.location.pathname === '/almudron'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AlmudronImg} alt="almudron icon"></img>
                                    <p className="img__description">Almudron</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tigrex' className={window.location.pathname === '/tigrex'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TigrexImg} alt="tigrex icon"></img>
                                    <p className="img__description">Tigrex</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/diablos' className={window.location.pathname === '/diablos'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={DiablosImg} alt="diablos icon"></img>
                                    <p className="img__description">Diablos</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/gossharag' className={window.location.pathname === '/gossharag'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GossHaragImg} alt="goss harag icon"></img>
                                    <p className="img__description">Goss Harag</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/jyuratodus' className={window.location.pathname === '/jyuratodus'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={JyuratodusImg} alt="jyuratodus icon"></img>
                                    <p className="img__description">Jyuratodus</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/rajang' className={window.location.pathname === '/rajang'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RajangImg} alt="rajang icon"></img>
                                    <p className="img__description">Rajang</p>
                                </div>
                            </Link>      
                        </div>
                        <div className="col-md-4">
                            <Link to='/thunderserpentnarwa' className={window.location.pathname === '/thunderserpentnarwa'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ThunderSerpentNarwaImg} alt="thunder serpent narwa icon"></img>
                                    <p className="img__description">Thunder Serpent Narwa</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/windserpentibushi' className={window.location.pathname === '/windserpentibushi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={WindSerpentIbushiImg} alt="wind serpent ibushi icon"></img>
                                    <p className="img__description">Wind Serpent Ibushi</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/raknakadaki' className={window.location.pathname === '/raknakadaki'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RaknaKadakiImg} alt="rakna-kadaki icon"></img>
                                    <p className="img__description">Rakna-Kadaki</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu;



