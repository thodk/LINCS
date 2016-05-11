var utils = require('../Utils_clust');
var initialize_matrix = require('../initialize_matrix');

module.exports = function ini_matrix_params(config, viz, network_data){

  var matrix = {};
  matrix.tile_colors = config.tile_colors;
  matrix.bar_colors = config.bar_colors;
  matrix.outline_colors = config.outline_colors;
  matrix.hlight_color = config.highlight_color;
  matrix.tile_title = config.tile_title;
  matrix.show_tile_tooltips = config.show_tile_tooltips;
  matrix.make_tile_tooltip = config.make_tile_tooltip;

  // initialized clicked tile and rows
  matrix.click_hlight_x = -666;
  matrix.click_hlight_y = -666;
  matrix.click_hlight_row = -666;
  matrix.click_hlight_col = -666;

  // definition of a large matrix (num links) determines if transition is run
  matrix.def_large_matrix = 10000;
  matrix.opacity_function = config.opacity_scale;

  matrix.orders = {};

  _.each(['row','col'], function(inst_rc){

    // row ordering is based on col info and vice versa 
    var other_rc;
    if (inst_rc==='row'){
      other_rc = 'col';
    } else {
      other_rc = 'row';
    }

    // the nodes are defined using other_rc 
    var inst_nodes = network_data[other_rc+'_nodes'];
    var num_nodes = inst_nodes.length;

    var nodes_names = _.map(inst_nodes, 'name');
    var tmp = nodes_names.sort();

    var alpha_index = _.map(tmp, function(d){
      return network_data[other_rc+'_nodes_names'].indexOf(d);
    });

    matrix.orders['alpha_'+inst_rc] = alpha_index;

    var possible_orders = ['clust','rank'];

    if (_.has(inst_nodes[0], 'rankvar')){
      possible_orders.push('rankvar');
    } 

    if (viz.all_cats[other_rc].length > 0){
      _.each( viz.all_cats[other_rc], function(inst_cat){
        // the index of the category has replaced - with _
        inst_cat = inst_cat.replace('-','_');
        possible_orders.push(inst_cat+'_index');
      });
    }

    _.each(possible_orders, function(inst_order){

      var tmp_order_index = d3.range(num_nodes)
        .sort(function(a,b){
          return inst_nodes[b][inst_order] - inst_nodes[a][inst_order];
        });

      matrix.orders[inst_order+'_'+inst_rc] = tmp_order_index;

    });

  });


  if (utils.has(network_data, 'all_links')) {
    matrix.max_link = _.max(network_data.all_links, function (d) {
      return Math.abs(d.value);
    }).value;
  } else {
    matrix.max_link = _.max(network_data.links, function (d) {
      return Math.abs(d.value);
    }).value;
  }

  var abs_max_val = Math.abs(matrix.max_link) * config.clamp_opacity;

  if (config.input_domain === 0) {
    if (matrix.opacity_function === 'linear') {
      matrix.opacity_scale = d3.scale.linear()
        .domain([0, abs_max_val]).clamp(true)
        .range([0.0, 1.0]);
    } else if (matrix.opacity_function === 'log') {
      matrix.opacity_scale = d3.scale.log()
        .domain([0.001, abs_max_val]).clamp(true)
        .range([0.0, 1.0]);
    }
  } else {
    if (matrix.opacity_function === 'linear') {
      matrix.opacity_scale = d3.scale.linear()
        .domain([0, config.input_domain]).clamp(true)
        .range([0.0, 1.0]);
    } else if (matrix.opacity_function === 'log') {
      matrix.opacity_scale = d3.scale.log()
        .domain([0.001, config.input_domain]).clamp(true)
        .range([0.0, 1.0]);
    }
  }

  var has_val_up = utils.has(network_data.links[0], 'value_up');
  var has_val_dn = utils.has(network_data.links[0], 'value_dn');

  if (has_val_up || has_val_dn) {
    matrix.tile_type = 'updn';
  } else {
    matrix.tile_type = 'simple';
  }

  if (utils.has(network_data.links[0], 'highlight')) {
    matrix.highlight = 1;
  } else {
    matrix.highlight = 0;
  }

  matrix.matrix = initialize_matrix(network_data);

  matrix.wait_tooltip = 0;

  return matrix;
};