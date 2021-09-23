class Api::CommentsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_post
    before_action :set_comment, only: [:update, :destroy]

    def index
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def set_post
        @post = current_user.posts.find(params[:post_id])
    end

    def set_comment
        @comment = @post.comments.find(params[:id])
    end

    def comment_params
        
    end

end
