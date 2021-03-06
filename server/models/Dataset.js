import lincsBookshelf from './base';

// Require files to ensure they've been loaded for relationship with Bookshelf
require('./Center');
require('./Cell');
require('./SmallMolecule');
const model = lincsBookshelf.Model.extend({
  tableName: 'datasets',
  // Relations
  center() {
    return this.belongsTo('Center');
  },
  cells() {
    return this.belongsToMany('Cell', 'cells_datasets');
  },
  smallMolecules() {
    return this.belongsToMany('SmallMolecule', 'small_molecules_datasets');
  },
});

const coll = lincsBookshelf.Collection.extend({ model });

export const Dataset = lincsBookshelf.model('Dataset', model);
export const Datasets = lincsBookshelf.collection('Datasets', coll);
