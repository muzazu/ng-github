class githubData {
    constructor($http) {
        this.stateLoader = true;
        this.loadData = function (repo, limit, page) {
            let that = this;
            $http.get(`https://api.github.com/search/repositories?q=${repo}&sort=stars&per_page=${limit}&page=${page}`)
                .then(function (data) {
                    that.stateLoader = false;
                    return data;
                });
        }
    }
}

githubData.$inject = ['$http'];
export default githubData;