import IView from '../IView/IView';

import PersonTemplate from './PersonView.hbs';
import './PersonView.css';

import { IPerson } from '../../Models/PersonModel/IPerson';

class PersonView extends IView {
    constructor(parent: HTMLElement) {
        super(parent, PersonTemplate({}), 'article');
    };

    public fillPerson(data: IPerson): void {
        console.log('In PersonView', data);
        this.parent.innerHTML = PersonTemplate(data);
        this.element.querySelector('article');
    };

    public bindClickEvent(listener: any): void {
        this.element.addEventListener('click', listener.bind(this));
    };
}

export default PersonView;
