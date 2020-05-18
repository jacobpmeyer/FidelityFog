class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where(track_id: params[:track_id])
    
    render :index
  end
  
  def create
    @comment = Comment.new(comment_params)

    @comment.user_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @track.destroy
    render json: ["Track successfully deleted"]
  end

  private 
  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end