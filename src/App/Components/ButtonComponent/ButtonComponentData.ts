import IComponentData from '../IComponent/IComponentData';

interface ButtonComponentData extends IComponentData {
    id?: string;
    className?: string;
    text?: string;
};

export default ButtonComponentData;
