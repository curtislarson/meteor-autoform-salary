# meteor-autoform-salary

An autoform salary input with currency selector using bootstrap

    meteor add quackware:meteor-autoform-salary

## Requirements

This package requires a bootstrap library such as

    meteor add twbs:bootstrap

If you wish you use icons in the input field, you must also install the font awesome library

    meteor add fortawesome:fontawesome

## Usage

From the internal test-app program.

### Html code

    <body>
      <div class="container">
        <div class="row">
          {{#autoForm schema=testSchema id="testSchema" type="normal"}}
            <div class="col-md-4">
              {{> afQuickField name="salary" currencies=currencies}}
            </div>
            <div class="col-md-4">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          {{/autoForm}}
        </div>
      </div>
    </body>

### Javascript code


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