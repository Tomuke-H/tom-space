# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  has_many :posts, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :friends, Array

  def self.friends(ids)
    ids = ids.empty? ? [0] : ids
    User.where("id IN (?)", ids).order("RANDOM()")
  end

end
