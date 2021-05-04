import Start from "./components/Pages/Start";
import Menu from "./components/Pages/Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GreatIzuchi from './components/Pages/LargeMonsterPages/GreatIzuchi';
import Aknosom from './components/Pages/LargeMonsterPages/Aknosom';
import Almudron from './components/Pages/LargeMonsterPages/Almudron';
import Anjanath from './components/Pages/LargeMonsterPages/Anjanath';
import Arzuros from './components/Pages/LargeMonsterPages/Arzuros';
import Barioth from './components/Pages/LargeMonsterPages/Barioth';
import Barroth from './components/Pages/LargeMonsterPages/Barroth';
import Basarios from './components/Pages/LargeMonsterPages/Basarios';
import Bishaten from './components/Pages/LargeMonsterPages/Bishaten';
import Diablos from './components/Pages/LargeMonsterPages/Diablos';
import GossHarag from './components/Pages/LargeMonsterPages/GossHarag';
import GreatBaggi from './components/Pages/LargeMonsterPages/GreatBaggi';
import GreatWroggi from './components/Pages/LargeMonsterPages/GreatWroggi';
import Jyuratodus from './components/Pages/LargeMonsterPages/Jyuratodus';
import Khezu from './components/Pages/LargeMonsterPages/Khezu';
import KuluYaKu from './components/Pages/LargeMonsterPages/KuluYaKu';
import Lagombi from './components/Pages/LargeMonsterPages/Lagombi';
import Magnamalo from './components/Pages/LargeMonsterPages/Magnamalo';
import Mizutsune from './components/Pages/LargeMonsterPages/Mizutsune';
import Nargacuga from './components/Pages/LargeMonsterPages/Nargacuga';
import PukeiPukei from './components/Pages/LargeMonsterPages/PukeiPukei';
import Rajang from './components/Pages/LargeMonsterPages/Rajang';
import RaknaKadaki from './components/Pages/LargeMonsterPages/RaknaKadaki';
import Rathalos from './components/Pages/LargeMonsterPages/Rathalos';
import Rathian from './components/Pages/LargeMonsterPages/Rathian';
import RoyalLudroth from './components/Pages/LargeMonsterPages/RoyalLudroth';
import Somnacanth from './components/Pages/LargeMonsterPages/Somnacanth';
import Tetranadon from './components/Pages/LargeMonsterPages/Tetranadon';
import ThunderSerpentNarwa from './components/Pages/LargeMonsterPages/ThunderSerpentNarwa';
import Tigrex from './components/Pages/LargeMonsterPages/Tigrex';
import TobiKadachi from './components/Pages/LargeMonsterPages/TobiKadachi';
import Volvidon from './components/Pages/LargeMonsterPages/Volvidon';
import WindSerpentIbushi from './components/Pages/LargeMonsterPages/WindSerpentIbushi';
import Zinogre from './components/Pages/LargeMonsterPages/Zinogre';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Start} />
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/greatizuchi" component={GreatIzuchi} />
      <Route exact path="/aknosom" component={Aknosom} />
      <Route exact path="/almudron" component={Almudron} />
      <Route exact path="/anjanath" component={Anjanath} />
      <Route exact path="/arzuros" component={Arzuros} />
      <Route exact path="/barioth" component={Barioth} />
      <Route exact path="/barroth" component={Barroth} />
      <Route exact path="/basarios" component={Basarios} />
      <Route exact path="/bishaten" component={Bishaten} />
      <Route exact path="/diablos" component={Diablos} />
      <Route exact path="/gossharag" component={GossHarag} />
      <Route exact path="/greatbaggi" component={GreatBaggi} />
      <Route exact path="/greatwroggi" component={GreatWroggi} />
      <Route exact path="/jyuratodus" component={Jyuratodus} />
      <Route exact path="/khezu" component={Khezu} />
      <Route exact path="/kuluyaku" component={KuluYaKu} />
      <Route exact path="/lagombi" component={Lagombi} />
      <Route exact path="/magnamalo" component={Magnamalo} />
      <Route exact path="/mizutsune" component={Mizutsune} />
      <Route exact path="/nargacuga" component={Nargacuga} />
      <Route exact path="/pukeipukei" component={PukeiPukei} />
      <Route exact path="/rajang" component={Rajang} />
      <Route exact path="/raknakadaki" component={RaknaKadaki} />
      <Route exact path="/rathalos" component={Rathalos} />
      <Route exact path="/rathian" component={Rathian} />
      <Route exact path="/royalludroth" component={RoyalLudroth} />
      <Route exact path="/somnacanth" component={Somnacanth} />
      <Route exact path="/tetranadon" component={Tetranadon} />
      <Route exact path="/thunderserpentnarwa" component={ThunderSerpentNarwa} />
      <Route exact path="/tigrex" component={Tigrex} />
      <Route exact path="/tobikadachi" component={TobiKadachi} />
      <Route exact path="/volvidon" component={Volvidon} />
      <Route exact path="/windserpentibushi" component={WindSerpentIbushi} />
      <Route exact path="/zinogre" component={Zinogre} />
    </div>
    </Router>
  );
}

export default App;