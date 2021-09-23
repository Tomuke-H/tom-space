class Api::UsersController < ApplicationController
    before_action :authenticate_user!
    def index
        render json: User.all
    end

    def friends
        render json: User.friends(current_user.friends)
    end

    def add_friend
        current_user.friends << params[:id].to_i
        current_user.save
    end
end
