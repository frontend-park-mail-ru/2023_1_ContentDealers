interface NoSubscriptionComponentData {
    title:       string;
    advantages?: string;
    description: string;
}

const NoSubscriptionData: NoSubscriptionComponentData = {
    title: 'У вас пока нет подписок',
    description: 'С подпиской вы сможете неограниченно смотреть тысячи фильмов и сериалов',
}

export { NoSubscriptionData, type NoSubscriptionComponentData };
