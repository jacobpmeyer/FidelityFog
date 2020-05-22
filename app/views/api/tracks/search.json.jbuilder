@results.each do |track|
  json.set! track.id do 
    json.extract! track, :id, :title, :artist_id, 
      :artist_name, :description
    json.track_file url_for(track.track_file)
    if track.album_art.attached?
      json.album_art url_for(track.album_art)
    end
  end
end