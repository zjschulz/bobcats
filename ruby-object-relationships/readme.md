# to load our classes into a console to test out, run `ruby run.rb` in the terminal from the `ruby-object-relationships` directory.

Music Library Application

Classes

* Song
** Song has a name
# has an initializer that takes in a name
# has a class method .all that returns all the Songs
# has an instance method #artist that returns the associated Artist

* Artist
# Artist has name
# has an initializer that takes in a name
# has a class method .all that returns all the Artists
# has an instance method #songs that returns all the associated Songs

* Genre
# Genre has a name
# has a class method .all that returns all the Artists

Associations

# Song belongs to an Artist
# Artist has many Songs

# Song belongs to a Genre
# Genre has many Songs
