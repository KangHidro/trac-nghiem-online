export class Paginate {
    totalPage?: number;
    totalItem?: number;
    limit: number;
    currentPage: number;
    data?: any[] = [];

    constructor() {
        this.currentPage = 1;
        this.limit = 10;
    }
}
