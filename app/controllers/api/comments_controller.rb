class Api::CommentsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_post
    before_action :set_comment, only: [:update, :destroy]

    def index
        @post.comments.find(params[:id])
    end

    def create
        @comment = @post.comments.new(comment_params)
        if(@comment.save)
            render json: @comment
        else
            render json: @comment.errors, status: 422
        end
    end

    def update
        if(@comment.update(comment_params))
            render json: @comment
        else
            render json: @comment.errors, status: 422
        end
    end

    def destroy
        @comment.destroy
    end

    private

    def set_post
        @post = current_user.posts.find(params[:post_id])
    end

    def set_comment
        @comment = @post.comments.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:text, :name)
    end

end
