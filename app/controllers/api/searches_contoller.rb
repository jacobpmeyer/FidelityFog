class Api::SearchesController < ApplicationController

  def index
    request = params[:request].split(" ")
    @results = []
    users = []
    request.each do |part|
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
  def search_params
    params.require(:search).permit(:request)
  end

end