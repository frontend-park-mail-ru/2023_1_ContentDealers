import type ArticleTitleComponentData from '../ArticleTitleComponent/ArticleTitleComponentData';
import type CardComponentData from '../CardComponent/CardComponentData';

export default interface ArticleComponentData {
    className: string;

    titleData: ArticleTitleComponentData;

    cardsData?: CardComponentData[];
}
