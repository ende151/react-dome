import styled from 'styled-components';


// 1、基本使用
export const Title = styled.div`
.content{
/* color:red; */
font-size: 20px;
}
`;

// 2、子元素单独抽取到一个样式组件
// 不支持16进制的颜色   （稍微有些缺陷）
export const HHHH = styled.div`
font-size: 40px;
/* color:wheat; */
`;


// 3、在不传入一些默认值的时候  我们可以通过 attrs 设置些默认值
//    也就是通过props接收参数 来动态设定我们的样式内容
//    注意不要使用 props.color  而是使用 不然会陷入回调地狱中   
export const DefaultStyle = styled.div.attrs({
    pageTypeColor: props => props.color || 'red'
})`
font-size: 40px;
color:${props => props.pageTypeColor};
`;



// 4、也可以从一个单独文件中引入样式变量
export const tColor = '#333';
export const tSize = '30';
export const tBackground = '#333';