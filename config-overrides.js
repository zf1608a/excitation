const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#1DA57A'
        }
    }),
);