require 'open-uri'
require 'nokogiri'
require 'pry'

url = 'https://chris.beams.io/posts/git-commit/'

html = open(url)
doc = Nokogiri::HTML(html)
title_node = doc.css(".post-title")
title = title_node.text

seven_rules = doc.css("div.post ol li").each.with_index(1) do |li, index|
    puts index.to_s + " " + li.text
end

# binding.pry