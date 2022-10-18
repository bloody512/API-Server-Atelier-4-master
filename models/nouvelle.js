const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(title, text, category, imageUrl, date) {
            super();
            this.Title = title !== undefined ? title : "";
            this.Text = text !== undefined ? text : "";
            this.Category = category !== undefined ? category : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Date = date !== undefined ? date : "";


            this.setKey("Id");
            this.addValidator('Title', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('Category', 'string');
            this.addValidator('ImageUrl', 'string');
            this.addValidator('Date', 'string');
        }
    }