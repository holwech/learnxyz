Urls =  new Mongo.Collection('urls');

Words =  new Mongo.Collection('words');
WordsIndex = new EasySearch.Index({
	collection: Words,
	fields: ['word'],
	engine: new EasySearch.MongoDB({
		selector: function (searchObject, options, aggregation) {
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
			selector.language = options.search.props.language;
			return selector;
		}
	})
});

Languages = new Mongo.Collection('languages');
LanguagesIndex = new EasySearch.Index({
	collection: Languages,
	fields: ['name','nativeName'],
	engine: new EasySearch.MongoDB(),
	limit: 3
});

Comments = new Mongo.Collection('comments');
