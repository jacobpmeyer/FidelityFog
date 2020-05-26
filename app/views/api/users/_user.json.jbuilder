
avatar = nil
banner = nil
if user.avatar.attached?
  avatar = json.avatar url_for(user.avatar)
end
if user.banner.attached?
  banner = json.banner url_for(user.banner)
end

json.extract! user, :id, :username, :email, :bio, :age, :display_name

json.tracks user.tracks.each do |track|
  json.extract! track, :id, :title, :artist_id, 
    :artist_name, :description
  json.track_file url_for(track.track_file)
  if track.album_art.attached?
    json.album_art url_for(track.album_art)
  end
end

json.avatar avatar
json.banner banner
