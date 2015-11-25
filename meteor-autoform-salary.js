AutoForm.addInputType("salary-input", {
  template: "afSalaryInput",
  valueOut: function() {

  },
  valueConverters: {

  }
});

Template.afSalaryInput.onRendered(function() {
  console.log(this.data);
});

Template.afSalaryInput.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.currencies;
    return atts;
  },
});

Template.afSalaryInput.onDestroyed(function() {

});
