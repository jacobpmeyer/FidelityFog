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

  def search
    request = params[:request].split(" ")
    @results = []
    users = []
    request.each do |part|
      if part === "shmoopy"
        ids = [4, 6, 8, 11, 13, 14]

        @results = ids.map do |the_id|
          Track.find(the_id)
        end
        render :search
        return
      end

      users.concat(User.where("lower(display_name) LIKE '%#{part.downcase}%'"))
      tracks = Track.where("lower(title) LIKE '%#{part.downcase}%'")

      @results.concat(tracks)
    end

    users.each do |user|
      @results.concat(user.tracks)
    end

    @results.uniq

    render :search

  end

  private 
  def track_params
    params.require(:track).permit(:title, :artist_name, :artist_id,
      :description, :track_file, :album_art, :id, :request)
  end
end