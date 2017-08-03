'use strict'

module.exports = app => {
    class NewsController extends app.Controller { *
        list() {
            const dataList = {
                list: [
                    { id: 1, title: 'news 1 title', url: 'www.baidu.com' },
                    { id: 2, title: 'news 2 title', url: 'www.sina.com' },
                ],
            };
            yield this.ctx.render('eews/list.tpl', dataList);
        }
    }
    return NewsController;
};