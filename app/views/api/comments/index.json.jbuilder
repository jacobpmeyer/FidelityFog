@comments.each do |comment|
  p comment
  json.set! comment.id do 
    json.extract! comment, :id, :body, :user_id, :track_id

    json.username comment.user.username
  end
end
