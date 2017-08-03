'use strict';

module.exports = appInfo => {
  const config = {};

    // should change to your own
  config.keys = 'eggDemo_by_Sunq_Wong';

    // add your config here
  return config;
};

exports.keys = 'eggDemo_by-Sunq_Wong';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// 本地开发调试工具，egg-development的配置文件
/**
 * @member Config#development
 * @property {Array} watchDirs - dirs needed watch, when files under these change, application will reload, use relative path
 * @property {Array} ignoreDirs - dirs don't need watch, including subdirectories, use relative path
 * @property {Boolean} fastReady - don't wait all plugins ready, default is true.
 * @property {Boolean} reloadOnDebug - whether reload on debug, default is true.
 * @see https://github.com/eggjs/egg-development-proxyworker to keep debug port when restart
 */
exports.development = {
  watchDirs: [],
  ignoreDirs: [],
  fastReady: true,
  reloadOnDebug: true,
};
