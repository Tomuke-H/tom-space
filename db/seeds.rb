# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

10.times do
    u = User.create(email: Faker::Internet.email, name: Faker::Name.name, password: "123456")
    3.times do
        p = u.posts.create(title: 'Some Post', text: Faker::TvShows::NewGirl.quote, likes: 3)
        3.times do
            p.comments.create(text: Faker::GreekPhilosophers.quote, name: "Billy")
        end
    end
end

puts "#{User.all.size} users"
puts "#{Post.all.size} posts"
puts "#{Comment.all.size} comments"