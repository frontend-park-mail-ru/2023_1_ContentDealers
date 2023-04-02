import IComponentData from '../IComponent/IComponentData';

interface LinkComponentData extends IComponentData {
    linkClass?: string;
    linkHref?: string;
    linkImageClass?: string;
    linkImageSrc?: string;
    linkImageWidth?: string;
    linkTextClass?: string;
    linkText?: string;
};

export default LinkComponentData;
