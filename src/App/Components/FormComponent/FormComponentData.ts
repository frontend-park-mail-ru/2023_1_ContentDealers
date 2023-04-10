import IComponentData from '../IComponent/IComponentData';

import InputComponentData from '../InputComponent/InputComponentData';
import ButtonComponentData from '../ButtonComponent/ButtonComponentData';
import LinkComponentData from '../LinkComponent/LinkComponentData';

interface FormComponentData extends IComponentData {
    formId?: string;
    formTitle?: string;
    enctype?: boolean;
    inputs: InputComponentData[];
    button: ButtonComponentData;
    links?: LinkComponentData[];
};

export default FormComponentData;
