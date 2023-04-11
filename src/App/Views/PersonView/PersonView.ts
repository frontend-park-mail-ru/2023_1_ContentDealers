import IView from '../IView/IView';

import PersonTemplate from './PersonView.hbs';
import './PersonView.css';

import IPerson from '../../Interfaces/Person/IPerson';

class PersonView extends IView {
    constructor(parent: HTMLElement) {
        super(parent, PersonTemplate({}), '.person');
    };

    public fillPerson(data: IPerson): void {
        this.element.innerHTML = PersonTemplate(data);
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default PersonView;
