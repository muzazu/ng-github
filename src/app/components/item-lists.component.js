import './item-lists.css';

class itemLists {
    constructor(gitService) {
        
        this.stateLoading = gitService.stateLoading;
        this.items = gitService.loadData('angular','10','1');
        
    }
};
itemLists.$inject = ['gitService'];
export default itemLists;