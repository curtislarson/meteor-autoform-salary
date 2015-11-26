Template.body.onRendered(function() {

});

Template.body.helpers({
  testSchema: function() {
    return new SimpleSchema({
      salary: {
        type: Object,
        autoform: {
          type: "salary-input",
          label: false
        }
      }
    });
  },
  currencies: function() {
    return [
      {
        label: "USD",
        value: "USD",
      },
      {
        label: "EUR",
        value: "EUR"
      }
    ];
  }
});