import type IComponent from '../IComponent/IComponent';

import type IComponentDataWithType from '../../Interfaces/interfaces';

export default interface ListComponentData<Type extends IComponent, Data> {
    listClass?: string;
    itemClass?: string;
    items?: IComponentDataWithType<Type, Data>[];
}
