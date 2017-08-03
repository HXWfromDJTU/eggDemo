'use strict';
// 1、首先编写Controller
module.export = app => {
  class HomeController extends app.Controller {
    *
        index() {
          this.ctx.body = 'hello Wong,welcome to EGG World!!!';
        }
    }
  return HomeController;
};
