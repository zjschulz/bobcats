# During this meeting we built a Dog class, using the Puppy Lab
# tests as a guide, but also adding in our own functionality

class Dog
    attr_reader :name

    # We can choose to use a class constant or a class variable to
    # store all of our Dog instances
    DOGS = []
    # @@all = []

    def initialize(name)
        DOGS << self #=> In this scope, self is equal to the instance of the Dog being instantiated
        @name = name
    end

    def name
        # self => In this scope, self would be equal to the
        #         instance of the Dog calling the name method
        @name
    end

    # def name=(name)
    #     @name = name
    # end

    def self.all
        # self => In this scope, self would be equal to the Dog class
        DOGS
    end

end