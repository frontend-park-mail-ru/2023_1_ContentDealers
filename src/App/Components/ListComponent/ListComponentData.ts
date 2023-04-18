import IComponent from '../IComponent/IComponent';

import IComponentDataWithType from '../../Interfaces/interfaces';

interface ListComponentData<Type extends IComponent, Data> {
    listClass?: string;
    itemClass?: string;
    items?: IComponentDataWithType<Type, Data>[];
}

export default ListComponentData;
