import type IArticleData from '../../Components/ArticleComponent/ArticleComponentData';

interface IMainViewConfig {
    selectionConfig: IArticleData;
}

const MainViewData: IMainViewConfig = {
    selectionConfig: {
        className: 'article_position article_rail',
        titleData: {},
    },
};

export default MainViewData;
