class QueryTransform {
  constructor(reqQuery, option = {}) {
    this.reqQuery = reqQuery;
    this.filterable = option.filterable || [];
    this.maxLimit = option.maxLimit || 300;
    this.include = option.include = [];
  }

  getPaginate() {
    const paginate = { limit: 0, offset: 0, page: 1 };
    const { limit, offset, page } = this.reqQuery;
    paginate.limit = +limit || 30;
    if (paginate.limit > this.maxLimit) paginate.limit = this.maxLimit;
    if (+page && +page >= 1) {
      paginate.offset = (+page - 1) * paginate.limit;
      paginate.page = +page;
    }
    if (+offset && +offset >= 0) {
      paginate.offset = +offset;
      paginate.page = Math.ceil(paginate.offset / paginate.limit) + 1;
    }
    return paginate;
  }

  getInclude() {
    const { includes = [] } = this.reqQuery;
    const tables = Array.isArray(includes) ? includes : includes.split(',');
    const joinTables = [];
    tables.forEach((tableName) => {
      if (this.include.length === 0 || this.include.includes(tableName)) {
        joinTables.push(tableName);
      }
    });
    return joinTables;
  }

  get(option = {}) {
    const pagination = this.getPaginate();
    const include = this.getInclude();
    return { pagination, include };
  }
}

module.exports = { QueryTransform };
