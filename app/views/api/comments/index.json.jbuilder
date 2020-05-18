@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :user_id, :track_id

    json.username comment.user.username
    if comment.user.avatar.attached?
      json.avatar url_for(comment.user.avatar)
    end
  end
end
