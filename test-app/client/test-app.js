Template.body.onRendered(function() {

});

Template.body.helpers({
  testSchema: function() {
    return new SimpleSchema({
      salary: {
        type: Object,
        autoform: {
          type: "salary-input"
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