import IComponentData from '../IComponent/IComponentData';

import LinkComponentData from '../LinkComponent/LinkComponentData';

interface DropdownButtonComponentData extends IComponentData {
    dataAction?: string;
    avatar?: string;
    items?: LinkComponentData[];
};

export default DropdownButtonComponentData;
