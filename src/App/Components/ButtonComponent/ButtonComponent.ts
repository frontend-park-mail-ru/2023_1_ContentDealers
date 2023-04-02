import IComponent from '../IComponent/IComponent';

import ButtonComponentTemplate from './ButtonComponent.hbs';
import ButtonComponentData from "./ButtonComponentData";
import './ButtonComponent.css';

class ButtonComponent extends IComponent {
    constructor(parent: HTMLElement, template = '', topElement = '', data?: ButtonComponentData) {
        super(parent, ButtonComponentTemplate(data), '.js-button');
    }
};

export default ButtonComponent;
