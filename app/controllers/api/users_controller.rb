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

    def remove_friend
        current_user.friends = current_user.friends.reject { |id| id == params[:id].to_i }
        if(current_user.save)
            render json: current_user.friends
        else
            render json: current_user.errors
        end
    end
end
