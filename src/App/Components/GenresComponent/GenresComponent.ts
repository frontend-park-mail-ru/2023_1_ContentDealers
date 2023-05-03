import IComponent from "../IComponent/IComponent";

import type IGenre from '../../Interfaces/Genre/IGenre';

import GenresComponentTemplate from './GenresComponent.hbs';
import './GenresComponent.css';

class GenresComponent extends IComponent {
    constructor(parent: HTMLElement, data?: IGenre[]) {
        console.log()
        super(parent, GenresComponentTemplate({ genres: data }));
    };
}

export default GenresComponent;
