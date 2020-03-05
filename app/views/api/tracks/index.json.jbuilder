@tracks.each do |track|
  json.set! :id do 
    json.extact! track, :id, :title, :artist_id, :user_id, 
      :artist_name, :description
  end
end
