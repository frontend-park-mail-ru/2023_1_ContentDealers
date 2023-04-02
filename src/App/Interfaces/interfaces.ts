import IComponentData from '../Components/IComponent/IComponentData';
import IComponent from '../Components/IComponent/IComponent';

interface IComponentDataWithType {
    componentData?: IComponentData;
    componentType: typeof IComponent;
};

export default IComponentDataWithType;
