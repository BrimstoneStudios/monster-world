import bite from './library/bite';
import scratch from './library/scratch';
import fireBreath from './library/fireBreath';
import fireBlast from './library/fireBlast';
import razorLeaf from './library/razorLeaf';
import waterBlast from './library/waterBlast';

let allAbilities = {
};

allAbilities.bite = bite;
allAbilities.scratch = scratch;
allAbilities.fireBreath = fireBreath;
allAbilities.fireBlast = fireBlast;
allAbilities.razorLeaf = razorLeaf;
allAbilities.waterBlast = waterBlast;


export { allAbilities as default };