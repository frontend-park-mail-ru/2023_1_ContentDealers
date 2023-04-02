import IComponentData from '../IComponent/IComponentData';

import LinkComponentData from '../LinkComponent/LinkComponentData';

interface DropdownButtonComponentData extends IComponentData {
    items?: LinkComponentData[];
};

export default DropdownButtonComponentData;
