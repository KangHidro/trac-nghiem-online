export class Paginate<T> {
    totalPage?: number;
    totalItem?: number;
    limit: number;
    currentPage: number;
    data?: T[] = [];

    constructor() {
        this.currentPage = 1;
        this.limit = 10;
    }
}
