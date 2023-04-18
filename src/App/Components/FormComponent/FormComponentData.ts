import InputComponentData from '../InputComponent/InputComponentData';
import ButtonComponentData from '../ButtonComponent/ButtonComponentData';
import LinkComponentData from '../LinkComponent/LinkComponentData';

interface FormComponentData {
    formId?: string;
    formTitle?: string;
    enctype?: boolean;
    inputs: InputComponentData[];
    button: ButtonComponentData;
    links?: LinkComponentData[];
}

export default FormComponentData;
