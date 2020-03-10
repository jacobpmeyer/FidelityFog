

json.extract! @track, :id, :description, :artist_id, :artist_name, :title 
json.track_file url_for(@track.track_file)
if @track.album_art.attached?
  json.album_art url_for(@track.album_art)
end