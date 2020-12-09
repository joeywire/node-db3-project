// scheme-model
const db = require('../../data/db-config');

module.exports = {
  find() {
    return db('schemes');
  },
  findById(id) {
    const returnObj = db('schemes').where('id', id).first();
    if (!returnObj) {
      return null;
    } else return returnObj;
  },
  findSteps(id) {
    //returns array of all correctly orerd step of the given scheme 
    //array should include scheme_name not the scheme_id 
    return db('steps as st')
      .join('schemes as sc', 'sc.id', 'st.scheme_id')
      .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
      .where('st.scheme_id', id)
      .orderBy('st.id', 'asc');
  }, 
  add(scheme) {
    return db('schemes')
      .insert(scheme, 'id');
  }, 
  addStep(stepData, id) {
    const completeStep = {...stepData, scheme_id: id};
    return db('steps')
      .insert(completeStep, 'id');
  }, 
  update(changes, id) {
    return db('schemes')
      .where('id', id)
      .update(changes);
  }, 
  remove(id) {
    return db('schemes')
      .where('id', id)
      .del();
  }
};

