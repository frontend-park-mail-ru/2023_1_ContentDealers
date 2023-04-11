import IComponentData from '../IComponent/IComponentData';

interface ButtonComponentData extends IComponentData {
    id?: string;
    className?: string;
    text?: string;
    dataAction?: string;
};

export default ButtonComponentData;
