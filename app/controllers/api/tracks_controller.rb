class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])
    
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end 

  def destroy
    @track = @current_user.tracks.find(params[:id])
    @track.destroy
    render json: ["Track successfully deleted"]
  end
  private 
  def track_params
    params.permit(:track).require(:title, :artist_name, :artist_id,
      :description, :track_file)
  end
end