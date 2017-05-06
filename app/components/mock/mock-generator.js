const matchUUID = '(((?=.*[0-9].*)(?=.*[A-Za-z].*)(?=.*-.*))[-0-9A-Za-z]+)'; //正则表达式匹配UUID
const matchNum = '([0-9]+)'; //匹配数字
const matchEnd = '($|\\?.*)';//匹配结束符
module.exports = {
    enable:true,
    mock:[{
        enable:true,
        url:new RegExp(`/v0.${matchNum}/test`),
        method:'get',
        template:function(){
            return {
                name:'test',
                age:123
            };
        }
    }]
};