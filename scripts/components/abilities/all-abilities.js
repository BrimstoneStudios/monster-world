import bite from './library/bite';
import scratch from './library/scratch';
import fireBreath from './library/fireBreath';
import fireBlast from './library/fireBlast';
import razorLeaf from './library/razorLeaf';
import waterBlast from './library/waterBlast';
import growl from './library/growl';
import stare from './library/stare';

let allAbilities = {
};

allAbilities.bite = bite;
allAbilities.scratch = scratch;
allAbilities.fireBreath = fireBreath;
allAbilities.fireBlast = fireBlast;
allAbilities.razorLeaf = razorLeaf;
allAbilities.waterBlast = waterBlast;
allAbilities.growl = growl;
allAbilities.stare = stare;


export { allAbilities as default };