import IComponentData from '../IComponent/IComponentData';

import IComponentDataWithType from '../../Interfaces/interfaces';

interface ListComponentData extends IComponentData {
    listClass?: string;
    itemClass?: string;
    items?: IComponentDataWithType[];
};

export default ListComponentData;
