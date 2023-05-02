import type InputComponentData from '../InputComponent/InputComponentData';
import type ButtonComponentData from '../ButtonComponent/ButtonComponentData';
import type LinkComponentData from '../LinkComponent/LinkComponentData';

export default interface FormComponentData {
    formId?: string;
    formTitle?: string;
    enctype?: boolean;
    inputs: InputComponentData[];
    button: ButtonComponentData;
    links?: LinkComponentData[];
}
