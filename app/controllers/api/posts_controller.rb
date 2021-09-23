class Api::PostsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_post, only:[:update, :destroy]

    def index
        render json: current_user.posts.all
    end

    def create
        @post = current_user.posts.new(post_params)
        @post.likes = 0
        if(@post.save)
            render json: @post
        else
            render json: @post.errors, status: 422
        end
    end

    def like
        @post = current_user.posts.find(params[:id])
        @post.likes+= 1
        @post.save
        render json: @post
    end

    def update
        if(@post.update(post_params))
            render json: @post
        else
            render json: @post.errors, status: 422
        end
    end

    def destroy
        render json: @post.destroy
    end

    private

    def post_params
        params.require(:post).permit(:title, :text)
    end

    def set_post
        @post = current_user.posts.find(params[:id])
    end

end
