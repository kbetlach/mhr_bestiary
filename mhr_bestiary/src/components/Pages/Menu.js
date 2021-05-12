import React from 'react';
import {Link} from "react-router-dom";
import GreatIzuchiIcon from '../../assets/images/LargeMonsterIcons/greatIzuchiIcon.jpg';
import AknosomIcon from '../../assets/images/LargeMonsterIcons/aknosomIcon.jpg';
import AlmudronIcon from '../../assets/images/LargeMonsterIcons/almudronIcon.jpg';
import AnjanathIcon from '../../assets/images/LargeMonsterIcons/anjanathIcon.jpg';
import ArzurosIcon from '../../assets/images/LargeMonsterIcons/arzurosIcon.jpg';
import BariothIcon from '../../assets/images/LargeMonsterIcons/bariothIcon.jpg';
import BarrothIcon from '../../assets/images/LargeMonsterIcons/barrothIcon.jpg';
import BasariosIcon from '../../assets/images/LargeMonsterIcons/basariosIcon.jpg';
import BishatenIcon from '../../assets/images/LargeMonsterIcons/bishatenIcon.jpg';
import DiablosIcon from '../../assets/images/LargeMonsterIcons/diablosIcon.jpg';
import GossHaragIcon from '../../assets/images/LargeMonsterIcons/gossHaragIcon.jpg';
import GreatBaggiIcon from '../../assets/images/LargeMonsterIcons/greatBaggiIcon.jpg';
import GreatWroggiIcon from '../../assets/images/LargeMonsterIcons/greatWroggiIcon.jpg';
import JyuratodusIcon from '../../assets/images/LargeMonsterIcons/jyuratodusIcon.jpg';
import KhezuIcon from '../../assets/images/LargeMonsterIcons/khezuIcon.jpg';
import KuluYaKuIcon from '../../assets/images/LargeMonsterIcons/kuluYaKuIcon.jpg';
import LagombiIcon from '../../assets/images/LargeMonsterIcons/lagombiIcon.jpg';
import MagnamaloIcon from '../../assets/images/LargeMonsterIcons/magnamaloIcon.jpg';
import MizutsuneIcon from '../../assets/images/LargeMonsterIcons/mizutsuneIcon.jpg';
import NargacugaIcon from '../../assets/images/LargeMonsterIcons/nargacugaIcon.jpg';
import PukeiPukeiIcon from '../../assets/images/LargeMonsterIcons/pukeiPukeiIcon.jpg';
import RajangIcon from '../../assets/images/LargeMonsterIcons/rajangIcon.jpg';
import RaknaKadakiIcon from '../../assets/images/LargeMonsterIcons/raknaKadakiIcon.jpg';
import RathalosIcon from '../../assets/images/LargeMonsterIcons/rathalosIcon.jpg';
import RathianIcon from '../../assets/images/LargeMonsterIcons/rathianIcon.jpg';
import RoyalLudrothIcon from '../../assets/images/LargeMonsterIcons/royalLudrothIcon.jpg';
import SomnacanthIcon from '../../assets/images/LargeMonsterIcons/somnacanthIcon.jpg';
import TetranadonIcon from '../../assets/images/LargeMonsterIcons/tetranadonIcon.jpg';
import ThunderSerpentNarwaIcon from '../../assets/images/LargeMonsterIcons/thunderSerpentNarwaIcon.jpg';
import TigrexIcon from '../../assets/images/LargeMonsterIcons/tigrexIcon.jpg';
import TobiKadachiIcon from '../../assets/images/LargeMonsterIcons/tobiKadachiIcon.jpg';
import VolvidonIcon from '../../assets/images/LargeMonsterIcons/volvidonIcon.jpg';
import WindSerpentIbushiIcon from '../../assets/images/LargeMonsterIcons/windSerpentIbushiIcon.jpg';
import ZinogreIcon from '../../assets/images/LargeMonsterIcons/zinogreIcon.jpg';
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
                                    <img className="img__img" src={GreatIzuchiIcon} alt="great izuchi icon"></img>
                                    <p className="img__description">Great Izuchi</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/lagombi' className={window.location.pathname === '/lagombi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={LagombiIcon} alt="lagombi icon"></img>
                                    <p className="img__description">Lagombi</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/greatbaggi' className={window.location.pathname === '/greatbaggi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GreatBaggiIcon} alt="great baggi icon"></img>
                                    <p className="img__description">Great Baggi</p>
                                </div>
                            </Link>                  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                             <Link to='/arzuros' className={window.location.pathname === '/arzuros'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ArzurosIcon} alt="arzuros icon"></img>
                                    <p className="img__description">Arzuros</p>
                                </div>
                            </Link>                        
                        </div>
                        <div className="col-md-4">
                            <Link to='/aknosom' className={window.location.pathname === '/aknosom'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AknosomIcon} alt="aknosom icon"></img>
                                    <p className="img__description">Aknosom</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link to='/khezu' className={window.location.pathname === '/khezu'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={KhezuIcon} alt="khezu icon"></img>
                                    <p className="img__description">Khezu</p>
                                </div>
                            </Link>                             
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/royalludroth' className={window.location.pathname === '/royalludroth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RoyalLudrothIcon} alt="royal ludroth icon"></img>
                                    <p className="img__description">Royal Ludroth</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/greatwroggi' className={window.location.pathname === '/greatwroggi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GreatWroggiIcon} alt="great wroggi icon"></img>
                                    <p className="img__description">Great Wroggi</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/barroth' className={window.location.pathname === '/barroth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BarrothIcon} alt="barroth icon"></img>
                                    <p className="img__description">Barroth</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/kuluyaku' className={window.location.pathname === '/kuluyaku'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={KuluYaKuIcon} alt="kulu-ya-ku icon"></img>
                                    <p className="img__description">Kulu-Ya-Ku</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tetranadon' className={window.location.pathname === '/tetranadon'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TetranadonIcon} alt="tetranadon icon"></img>
                                    <p className="img__description">Tetranadon</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/pukeipukei' className={window.location.pathname === '/pukeipukei'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={PukeiPukeiIcon} alt="pukei-pukei icon"></img>
                                    <p className="img__description">Pukei-Pukei</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/basarios' className={window.location.pathname === '/basarios'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BasariosIcon} alt="basarios icon"></img>
                                    <p className="img__description">Basarios</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/volvidon' className={window.location.pathname === '/volvidon'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={VolvidonIcon} alt="volvidon icon"></img>
                                    <p className="img__description">Volvidon</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tobikadachi' className={window.location.pathname === '/tobikadachi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TobiKadachiIcon} alt="tobi-kadachi icon"></img>
                                    <p className="img__description">Tobi-Kadachi</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/rathian' className={window.location.pathname === '/rathian'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RathianIcon} alt="rathian icon"></img>
                                    <p className="img__description">Rathian</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/barioth' className={window.location.pathname === '/barioth'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BariothIcon} alt="barioth icon"></img>
                                    <p className="img__description">Barioth</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/somnacanth' className={window.location.pathname === '/somnacanth'}>                            
                                <div className="img__wrap">
                                    <img className="img__img" src={SomnacanthIcon} alt="somnacanth icon"></img>
                                    <p className="img__description">Somnacanth</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/magnamalo' className={window.location.pathname === '/magnamalo'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={MagnamaloIcon} alt="magnamalo icon"></img>
                                    <p className="img__description">Magnamalo</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/anjanath' className={window.location.pathname === '/anjanath'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AnjanathIcon} alt="anjanath icon"></img>
                                    <p className="img__description">Anjanath</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/rathalos' className={window.location.pathname === '/rathalos'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RathalosIcon} alt="rathalos icon"></img>
                                    <p className="img__description">Rathalos</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/mizutsune' className={window.location.pathname === '/mizutsune'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={MizutsuneIcon} alt="mizutsune icon"></img>
                                    <p className="img__description">Mizutsune</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/zinogre' className={window.location.pathname === '/zinogre'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ZinogreIcon} alt="zinogre icon"></img>
                                    <p className="img__description">Zinogre</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/nargacuga' className={window.location.pathname === '/nargacuga'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={NargacugaIcon} alt="nargacuga icon"></img>
                                    <p className="img__description">Nargacuga</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/bishaten' className={window.location.pathname === '/bishten'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={BishatenIcon} alt="bishaten icon"></img>
                                    <p className="img__description">Bishaten</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/almudron' className={window.location.pathname === '/almudron'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={AlmudronIcon} alt="almudron icon"></img>
                                    <p className="img__description">Almudron</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/tigrex' className={window.location.pathname === '/tigrex'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={TigrexIcon} alt="tigrex icon"></img>
                                    <p className="img__description">Tigrex</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/diablos' className={window.location.pathname === '/diablos'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={DiablosIcon} alt="diablos icon"></img>
                                    <p className="img__description">Diablos</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/gossharag' className={window.location.pathname === '/gossharag'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={GossHaragIcon} alt="goss harag icon"></img>
                                    <p className="img__description">Goss Harag</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/jyuratodus' className={window.location.pathname === '/jyuratodus'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={JyuratodusIcon} alt="jyuratodus icon"></img>
                                    <p className="img__description">Jyuratodus</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/rajang' className={window.location.pathname === '/rajang'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RajangIcon} alt="rajang icon"></img>
                                    <p className="img__description">Rajang</p>
                                </div>
                            </Link>      
                        </div>
                        <div className="col-md-4">
                            <Link to='/thunderserpentnarwa' className={window.location.pathname === '/thunderserpentnarwa'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={ThunderSerpentNarwaIcon} alt="thunder serpent narwa icon"></img>
                                    <p className="img__description">Thunder Serpent Narwa</p>
                                </div>
                            </Link>     
                        </div>
                        <div className="col-md-4">
                            <Link to='/windserpentibushi' className={window.location.pathname === '/windserpentibushi'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={WindSerpentIbushiIcon} alt="wind serpent ibushi icon"></img>
                                    <p className="img__description">Wind Serpent Ibushi</p>
                                </div>
                            </Link>     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <Link to='/raknakadaki' className={window.location.pathname === '/raknakadaki'}>
                                <div className="img__wrap">
                                    <img className="img__img" src={RaknaKadakiIcon} alt="rakna-kadaki icon"></img>
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



