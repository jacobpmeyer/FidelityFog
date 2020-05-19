  json.set! comment.id do 
    json.extract! comment, :id, :body, :user_id, :track_id, :created_at

    json.username comment.user.display_name || comment.user.username
    if comment.user.avatar.attached?
      json.avatar url_for(comment.user.avatar)
    end
  end