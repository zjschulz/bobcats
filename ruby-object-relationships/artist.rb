class Artist
    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
        @songs = []
    end

    def self.all
        @@all
    end

    def add_song_by_name(name)
        song = Song.new(name)
        song.artist = self
    end

    def songs
        Song.all.select{|song| song.artist == self}
    end

end