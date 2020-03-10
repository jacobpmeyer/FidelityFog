class Api::TracksController < ApplicationController

  def index
    all_tracks = Track.all
    #################
    track_arr = Array.new(all_tracks)
    first = Track.find(37)
    shuffle = track_arr.shuffle
    slice = [first].concat(shuffle).take(3)
    # change this for production
    @tracks = shuffle
    render :index
  end

  def show
    @track = Track.find(params[:id])
    render :show
  end

  def create
    @track = Track.new(track_params)
    # if @track.album_art
    debugger

    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update

    
    @track = Track.find(params[:id])

    if @track.update(track_params)
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end 

  def destroy
    @track = current_user.tracks.find(params[:id])
    @track.destroy
    render json: ["Track successfully deleted"]
  end
  private 
  def track_params
    params.require(:track).permit(:title, :artist_name, :artist_id,
      :description, :track_file, :album_art, :id)
  end
end