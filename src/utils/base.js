const base = {
    get() {
        return {
            url : "http://localhost:8080/sheuquyanglaofuwu/",
            name: "sheuquyanglaofuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/sheuquyanglaofuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "养老服务系统"
        } 
    }
}
export default base
