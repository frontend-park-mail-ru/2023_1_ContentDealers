import type IComponent from '../Components/IComponent/IComponent';

export default interface IComponentDataWithType<
    cType extends IComponent,
    cData
> {
    componentType: { new (parent: HTMLElement, data?: any): cType }; // TODO delete any, but how rewrite ListComponent
    componentData?: cData;
}
