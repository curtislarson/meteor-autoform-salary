Template.body.onRendered(function() {

});

Template.body.helpers({
  testSchema: function() {
    return new SimpleSchema({
      salary: {
        type: Object,
        autoform: {
          type: "salary-input",
          enableIcon: true,
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
        icon: "fa-usd"
      },
      {
        label: "EUR",
        value: "EUR",
        icon: "fa-eur"
      }
    ];
  }
});