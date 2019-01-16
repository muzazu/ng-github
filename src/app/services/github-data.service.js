class githubData {
    constructor($http) {
        // filters
        this.repo = 'angular';
        this.limit = 10;
        this.page = 1;
        this.sort = 'stars';

        // lists sorts
        this.sorts = ['stars', 'forks', 'updated'];

        // update local filters
        this.updateFilters = function (repo, limit, page, sort) {
            this.repo = repo;
            this.limit = limit;
            this.page = page;
            this.sort = sort;
        }

        // load data from api
        this.loadData = function() {
            let req = $http.get(`https://api.github.com/search/repositories?q=${this.repo}&sort=stars&per_page=${this.limit}&page=${this.page}`)
                            .then(function (data) {
                                return data;
                            });
            return req;
        }
    }
}

export default githubData;