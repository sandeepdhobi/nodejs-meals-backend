const Promise = require('bluebird');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

class Role {
  constructor(options) {
    this.db = options.db;
    this.schema = new mongoose.Schema(options.schema);
    this.model = this.db.model(options.tableName, this.schema);
    this.jsonSchema = options.jsonSchema;
  }

  getRoleByName(input) {
    return this.model.findOne({ name: input });
  }

  checkPermission({ name, permissions, level }) {
    const query = {
      name,
      permissions,
    };
    if (level) query.level = level;
    return this.model.findOne(query);
  }

  getJsonSchema() {
    return this.jsonSchema;
  }

}

module.exports = Role;