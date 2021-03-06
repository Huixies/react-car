const ESLINT_ENABLE=true;
const STYLELINT_ENABLE=true;

const path=require('path');

const StylelintPlugin=require('stylelint-webpack-plugin');
const HtmlPlugin=require('html-webpack-plugin');

module.exports={
  ESLINT_ENABLE, STYLELINT_ENABLE,
  stylelintPlugin: STYLELINT_ENABLE?[
    new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue', '**/*.scss']
    })
  ]:[],
  htmlPlugin: new HtmlPlugin({
    template: path.resolve(__dirname, './index.html')
  })
};
