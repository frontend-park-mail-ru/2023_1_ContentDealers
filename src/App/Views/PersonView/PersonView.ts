import IView from '../IView/IView';

import PersonTemplate from './PersonView.hbs';
import './PersonView.css';

import type IPerson from '../../Interfaces/Person/IPerson';

class PersonView extends IView {
    public constructor(parent: HTMLElement) {
        super(parent, PersonTemplate({}));
    }

    public fillPerson(data: IPerson): void {
        this.parent.innerHTML = '';

        this.parent.innerHTML = PersonTemplate(data);
        this.element = <HTMLElement>this.parent.firstElementChild;
    }

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    }
}

export default PersonView;
