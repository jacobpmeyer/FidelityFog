@comments.each do |comment|
  p comment
  json.set! comment.id do 
    json.extract! comment, :id, :body, :user_id, :track_id

    json.username comment.user.username
    json.avatar comment.user.avatar
  end
end
