import type LinkComponentData from '../LinkComponent/LinkComponentData';

export default interface DropdownButtonComponentData {
    dataAction?: string;
    avatar?: string;
    items?: LinkComponentData[];
}
