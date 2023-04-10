import IComponentData from '../IComponent/IComponentData';

interface InputComponentData extends IComponentData {
    class?: string;
    inputClass?: string;
    id: string;
    checkboxText?: string;
    type?: string;
    placeholder?: string;
};

export default InputComponentData;
