class githubData {
    constructor($http) {
        this.stateLoader = false;
        this.url = 'https://github.com/preboot/angular-webpack';
        this.stateLoader = true;
        this.data = this.loadData($http,'angular', 10, 1);
    }
    loadData($http, repo, limit, page) {
        $http.get(`https://api.github.com/search/repositories?q=${repo}&sort=stars&limit=${limit}&page=${page}`)
            .then(function (data) {
                this.data = data;
            });
    }
}

githubData.$inject = ['$http'];
export default githubData;