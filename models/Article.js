// import mongoose for creating a model using the Schema consttructor
var mongoose = require("mongoose");

// Save a reference to the Schema constructor. extract the Schema constructor from the mongoose object
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
// everything that is declared inside the new Schema object, will be declared as fields in the Article collection
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
      },
      // `link` is required and of type String
      link: {
        type: String,
        required: true
      },
      // `note` is an object that stores a Note id. Declaring a field called note.
      //   this is how mongoose handles associateions between models (collections)
    //   
      // This allows us to populate the Article with an associated Note
    //   relationship => an Article has One note
      note: {
        //   set the type to ObectId using the Schema.Type object
        type: Schema.Types.ObjectId,
              // The ref property references the Note collection when performing joins

        ref: "Note"
      }
    });

    // mongoose.model => creates a collection called Article and set it's fields using the ArticleSchmea created above.
    var Article = mongoose.model("Article", ArticleSchema);

    module.exports = Article;