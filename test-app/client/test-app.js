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
      },
      "salary.amount": {
        type: Number
      },
      "salary.currency": {
        type: String
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

AutoForm.addHooks("testSchema", {
  onSubmit: function(insertDoc, updateDoc, currentDoc) {
    console.log(insertDoc);
    return false;
  },
  onError: function() {
    console.log("err", arguments);
  }
});