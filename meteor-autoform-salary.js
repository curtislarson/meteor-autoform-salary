var SelectedCurrency = new ReactiveVar(null);

AutoForm.addInputType("salary-input", {
  template: "afSalaryInput",
  valueOut: function() {
    var salary = this.val();
    var currency = $("#currencySelect").val();
    var val = {
      amount: salary,
      currency: currency
    };
    return val;
  },
  valueConverters: {

  }
});

Template.afSalaryInput.onRendered(function() {
  var currency = $("#currencySelect").val();
  SelectedCurrency.set(currency);
});

Template.afSalaryInput.events({
  "change #currencySelect": function(event) {
    var currency = $(event.target).val();
    SelectedCurrency.set(currency);
  }
});

Template.afSalaryInput.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.currencies;
    return atts;
  },
  currencyIcon: function() {
    var selectedCurrency = SelectedCurrency.get();
    if (selectedCurrency) {
      var currencies = Template.currentData().atts.currencies;
      for (var i = 0; i < currencies.length; i++) {
        if (currencies[i].value === selectedCurrency) {
          return currencies[i].icon;
        }
      }
    }
  }
});

Template.afSalaryInput.onDestroyed(function() {

});
