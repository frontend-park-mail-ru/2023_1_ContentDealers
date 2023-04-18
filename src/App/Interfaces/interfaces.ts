import IComponent from '../Components/IComponent/IComponent';

interface IComponentDataWithType<cType extends IComponent, cData> {
    componentType: { new (parent: HTMLElement, data?: any): cType }; // TODO delete any, but how rewrite ListComponent
    componentData?: cData;
}

export default IComponentDataWithType;
